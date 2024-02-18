import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import logo from "../../assets/blog_logo.svg";
import "./Navbar.css";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/checkauth/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${cookies["mytoken"]}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      })
      .then((res) => setIsLogin(true))
      .catch((e) => {
        if (e.status === 401) {
          console.log("Not Authenticated");
          setIsLogin(false);
        }

        return Promise.reject(e.json());
      });
  }, [setIsLogin, isLogin, removeCookie, cookies]);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 180) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="navbar fixed-nav-bar shadow"
      >
        <img src={logo} alt="" className="logo" />
        <ul className="nav-link">
          <li key="blogs" className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav" : "notActive navlink"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>

          <li key="myblogs" className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav" : "notActive navlink"
              }
              to="/myblogs"
            >
              My Blogs
            </NavLink>
          </li>

          <li key="writeblogs" className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav" : "notActive navlink"
              }
              to="/writeblog"
            >
              Write a Blog
            </NavLink>
          </li>

          {/* <li key="authors" className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav" : "notActive navlink"
              }
              to="/authors"
            >
              Explore Authors
            </NavLink>
          </li> */}

          {/* <li key="profile" className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav" : "notActive navlink"
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li> */}
        </ul>
        {/* <motion.div
          whileTap={{ scale: 0.85 }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
        > */}
        {/* <LightModeIcon className="toggle-mode" /> */}
        {/* </motion.div> */}
        <div className="search-box">
          <input type="text" placeholder="Search blogs..." />
          <SearchIcon className="search" />
        </div>
        {isLogin ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.03 }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
            className="signup-btn"
            onClick={() => {
              removeCookie("mytoken");
              navigate("/blogs");
            }}
          >
            Log out
          </motion.button>
        ) : (
          <Link to="/signup">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.03 }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
              className="signup-btn"
            >
              Sign Up
            </motion.button>
          </Link>
        )}
      </motion.nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
