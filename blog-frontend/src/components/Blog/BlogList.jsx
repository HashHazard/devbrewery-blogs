import React, { createContext, useContext, useEffect, useState } from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../../App";

const BlogList = () => {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/articles/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Token c009638bf4040876402fdb802ca4027ab0823988",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setArticles(res))
  //     .catch((error) => console.log(error));
  // }, []);

  const articles = useContext(ArticlesContext);

  return (
    <div className="blog-container">
      <motion.h1
        initial={{ opacity: 0, fontSize: "0px" }}
        animate={{ opacity: 1, fontSize: "54px" }}
        transition={{ ease: "easeInOut", duration: 0.25 }}
        className="title fancy"
      >
        THE BLOG
      </motion.h1>
      <div className="blog-list">
        {articles.map((article) => (
          <Link key={article.id} to={`/blogs/${article.id}`}>
            <BlogCard blog={article} />
          </Link>
        ))}
        {/* {articles.map((article) => {
          return <h2>{article}</h2>;
        })} */}
      </div>
    </div>
  );
};

export default BlogList;
