import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Render } from "../Editor/Render";
import { ArticlesContext } from "../../App";
const Post = () => {
  const { id } = useParams();
  const articles = useContext(ArticlesContext);
  const blog = articles.filter((article) => article.id === Number(id))[0];

  if (!blog) return <span>The blog post you've requested doesn't exist.</span>;
  console.log(blog);

  return (
    <div style={{ padding: "100px" }}>
      <Render blog={blog} />
      {/* <h1>POst</h1> */}
    </div>
  );
};

export default Post;
