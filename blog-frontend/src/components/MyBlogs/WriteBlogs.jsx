import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../../App";
import Editor from "../Editor/Editor";

const WriteBlogs = () => {
  const { id } = useParams();
  const articles = useContext(ArticlesContext);
  const blog = articles.filter((article) => article.id === Number(id))[0];

  if (!blog) return <Editor />;
  return <Editor content={blog.content} />;
};

export default WriteBlogs;
