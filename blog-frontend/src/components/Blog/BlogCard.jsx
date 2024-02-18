import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const { title, author_name, summary, content, created_at, updated_at } = blog;
  if (!blog) return <div>Nothing to Display</div>;
  const textColor = {
    // initial: { color: "#d9d8cc" },
    hover: {
      color: "#fff",
      y: -4,
      // scale: 1.04,
      transition: {
        delay: 0.2,
        // duration: 0.2,
        vJJKUtype: "tween",
        ease: "easeOut",
      },
    },
  };

  const descText = {
    // initial: { color: "#d9d8cc" },
    hover: {
      color: "#d9d8cc",
      // scale: 1.04,
      transition: {
        delay: 0.2,
        // duration: 0.2,
        vJJKUtype: "tween",
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      // whileHover={{ scale: 1.03, color: "#008000" }}
      // initial="initial"
      // animate="initial"
      whileHover="hover"
      whileTap={{ scale: 1 }}
      // transition={{ type: "spring", stiffness: 300 }}
      transition={{ ease: "easeInOut" }}
      className="blog-card"
    >
      <p className="blog-publish">{created_at}</p>
      <motion.h2 variants={textColor} className=" blog-title">
        {title}
      </motion.h2>
      <motion.p variants={descText} className="blog-desc">
        {summary}
      </motion.p>
      <p className="blog-author">{author_name}</p>
    </motion.div>
  );
};

export default BlogCard;
