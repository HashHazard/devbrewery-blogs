import "./Preview.css";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useContext, useDebugValue, useEffect, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import CodeIcon from "@mui/icons-material/Code";
import ClearIcon from "@mui/icons-material/Clear";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import { Render } from "./Render";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../../App";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar">
      <FormatBoldIcon
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`menu-btn ${editor.isActive("bold") ? "is-active" : ""}`}
      />
      <FormatItalicIcon
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`menu-btn ${editor.isActive("italic") ? "is-active" : ""}`}
      />
      <StrikethroughSIcon
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`menu-btn ${editor.isActive("strike") ? "is-active" : ""}`}
      />
      <CodeIcon
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`menu-btn ${editor.isActive("code") ? "is-active" : ""}`}
      />

      <ClearIcon
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="menu-btn"
      />

      <ClearAllIcon
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="menu-btn"
      />

      <FormatTextdirectionLToRIcon
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`menu-btn ${
          editor.isActive("paragraph") ? "is-active" : ""
        }`}
      />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </button>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const Editor = ({ content = "" }) => {
  // const { id } = useParams();
  // const articles = useContext(ArticlesContext);
  // const blog = articles.filter((article) => article.id === Number(id))[0];

  // if (!blog)
  //   return (
  //     <span style={{ padding: "100px" }}>
  //       The blog post you've requested doesn't exist.
  //     </span>
  //   );
  // const { title, author_name, summary, content } = blog;
  const [editorContent, setEditorContent] = useState(content);
  return (
    <>
      <div
        style={{ padding: "100px", background: "#273337", margin: "100px" }}
        className="editor"
      >
        <div>
          <input
            type="text"
            name="title"
            // onBlur={handleData}
            placeholder="title here..."
            className="title-inp"
          />
        </div>
        <EditorProvider
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={content}
          className="content-editor"
          onUpdate={({ editor }) => {
            // onChange(editor?.getHTML());
            setEditorContent(editor?.getHTML());
          }}
        ></EditorProvider>
        <hr />
        {/* <Render /> */}
      </div>
    </>
  );
};

export default Editor;
