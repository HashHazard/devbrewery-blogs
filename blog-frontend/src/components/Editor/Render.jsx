import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

export const Render = ({ blog }) => {
  const { title, author, summary, content, created_at, updated_at } = blog;
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="render">
      <div className="info">
        {/* <h4>{data.tags.join(" ")}</h4> */}
        <h3>{`Updated on ${updated_at}`}</h3>
        <h1>{title}</h1>
        <h4>{`By ${author} / ${created_at} `}</h4>
      </div>
      <div className="content">{parse(sanitizeHtml(content))}</div>
    </div>
  );
};
