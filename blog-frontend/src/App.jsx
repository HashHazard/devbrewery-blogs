import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import BlogList from "./components/Blog/BlogList";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import MyBlogs from "./components/OtherPages/MyBlogs";
import WriteBlog from "./components/OtherPages/WriteBlog";
import OtherAuthors from "./components/OtherPages/OtherAuthors";
import Profile from "./components/OtherPages/Profile";
import NotFound from "./components/NotFound";
import BlogPage from "./components/Blog/BlogPage";
import Editor from "./components/Editor/Editor";
import Post from "./components/Blog/Post";
import Signup from "./components/Signup/Signup";
import { CookiesProvider } from "react-cookie";

export const ArticlesContext = createContext(undefined);

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Token c009638bf4040876402fdb802ca4027ab0823988",
      },
    })
      .then((res) => res.json())
      .then((res) => setArticles(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <CookiesProvider>
        <ArticlesContext.Provider value={articles}>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Navbar />}> */}
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<Post />} />
            <Route path="/myblogs" element={<BlogPage />} />
            <Route path="/writeblog" element={<Editor />} />
            <Route path="/authors" element={<OtherAuthors />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            {/* </Route> */}
          </Routes>
          {/* <Navbar />
      <BlogList /> */}
        </ArticlesContext.Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
