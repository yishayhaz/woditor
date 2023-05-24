import React from "react";
import { WoditorProps } from "./types";
import commands from "./config";
import icons from "./assets/icons";

const debounce = (cb: (...args: any) => void, delay: number) => {
  let timer: any;
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default function Woditor(props: WoditorProps) {
  const listenTo = React.useRef([] as string[]);

  const debounceToggleButtons = React.useRef(
    debounce(() => {
      listenTo.current.map((item) => {
        const active = document.queryCommandState(item);
        toggleActive(item, active);
      });
    }, 300)
  ).current;

  React.useEffect(() => {
    document.addEventListener("selectionchange", debounceToggleButtons);

    return () => {
      document.removeEventListener("selectionchange", () => {});
    };
  }, []);

  const toggleActive = (key: string, toggle?: boolean) => {
    document
      .querySelector(`#woditor__toolbar__button__${key}`)
      ?.classList.toggle("active", toggle);
  };

  return (
    <div className="woditor">
      <div className="woditor__toolbar">
        {props.toolbar?.map((key, index) => {
          if (key === "|") {
            return <div className="woditor__toolbar__separator" key={index} />;
          }

          const item = commands[key];

          if (item.type !== "button") {
            return (
              <button
                key={index}
                className="woditor__toolbar__button"
                id={`woditor__toolbar__button__${item.cmd}`}
              >
                {icons[key]}
              </button>
            ); // todo
          }
          listenTo.current.push(item.cmd);
          return (
            <button
              key={index}
              className="woditor__toolbar__button"
              id={`woditor__toolbar__button__${item.cmd}`}
              onClick={(e) => {
                toggleActive(item.cmd);
                document.execCommand(item.cmd);
              }}
            >
              {icons[key]}
            </button>
          );
        })}
        {props.children}
      </div>
      <div
        className="woditor__editor"
        contentEditable="true"
        dangerouslySetInnerHTML={{
          __html: props.data || "",
        }}
        onInput={(e) => {
          if (props.onChange) {
            props.onChange((e.target as HTMLElement).innerHTML);
          }
        }}
      ></div>
    </div>
  );
}
