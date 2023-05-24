export interface WoditorProps {
  toolbar: toolbarItem[];
  data?: string;
  onChange?: (data: string) => void;
  children?: React.ReactNode;
}

export interface commandsToToolbarType {
  [key: string]: {
    cmd: string;
    type: "button" | "color" | "select" | "text" | "url";
    icon?: JSX.Element;
  };
}

export type toolbarItem = commandsNames | "|";

export type commandsNames =
  | "background"
  | "bold"
  | "link"
  | "font"
  | "fontSize"
  | "color"
  | "heading"
  | "indent"
  | "hr"
  | "html"
  | "image"
  | "list"
  | "orderedList"
  | "p"
  | "italic"
  | "justifyCenter"
  | "justifyFull"
  | "justifyLeft"
  | "justifyRight"
  | "outdent"
  | "redo"
  | "removeFormat"
  | "strike"
  | "subscript"
  | "superscript"
  | "underline"
  | "undo"
  | "unlink";
