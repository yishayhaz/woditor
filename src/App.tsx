import Woditor from "./woditor/src";
import "./woditor/src/styles/style.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  return (
    <Woditor
      toolbar={[
        "bold",
        "italic",
        "underline",
        "strike",
        "|",
        "list",
        "orderedList",
        "|",
        "justifyLeft",
        "justifyCenter",
        "justifyRight",
        "justifyFull",
        "|",
        "indent",
        "outdent",
        "|",
        "link",
        "unlink",
        "|",
        "background",
        "color",
        "|",
        "font",
        "fontSize",
        "heading",
        "hr",
        "html",
        "image",
        "p",
        "|",
        "subscript",
        "superscript",
        "|",
        "removeFormat",
        "undo",
        "redo",
      ]}
      onChange={(data) => setData(data)}
    ></Woditor>
  );
}

export default App;
