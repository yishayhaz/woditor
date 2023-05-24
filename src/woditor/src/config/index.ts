import { commandsToToolbarType } from "../types";

export default {
  background: {
    cmd: "backColor",
    type: "color",
  },
  bold: {
    cmd: "bold",
    type: "button",
  },
  link: {
    cmd: "createLink",
    type: "url",
  },
  font: {
    cmd: "fontName",
    type: "select",
  },
  fontSize: {
    cmd: "fontSize",
    type: "select",
  },
  color: {
    cmd: "foreColor",
    type: "color",
  },
  heading: {
    cmd: "formatBlock",
    type: "select",
  },
  indent: {
    cmd: "indent",
    type: "button",
  },
  hr: {
    cmd: "insertHorizontalRule",
    type: "button",
  },
  html: {
    cmd: "insertHTML",
    type: "text",
  },
  image: {
    cmd: "insertImage",
    type: "url",
  },
  list: {
    cmd: "insertUnorderedList",
    type: "button",
  },
  orderedList: {
    cmd: "insertOrderedList",
    type: "button",
  },
  p: {
    cmd: "insertParagraph",
    type: "button",
  },
  italic: {
    cmd: "italic",
    type: "button",
  },
  justifyCenter: {
    cmd: "justifyCenter",
    type: "button",
  },
  justifyFull: {
    cmd: "justifyFull",
    type: "button",
  },
  justifyLeft: {
    cmd: "justifyLeft",
    type: "button",
  },
  justifyRight: {
    cmd: "justifyRight",
    type: "button",
  },
  outdent: {
    cmd: "outdent",
    type: "button",
  },
  redo: {
    cmd: "redo",
    type: "button",
  },
  removeFormat: {
    cmd: "removeFormat",
    type: "button",
  },
  strike: {
    cmd: "strikeThrough",
    type: "button",
  },
  subscript: {
    cmd: "subscript",
    type: "button",
  },
  superscript: {
    cmd: "superscript",
    type: "button",
  },
  underline: {
    cmd: "underline",
    type: "button",
  },
  undo: {
    cmd: "undo",
    type: "button",
  },
  unlink: {
    cmd: "unlink",
    type: "button",
  },
};
