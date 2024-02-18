import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./Table.css";

const MyBlogs = () => {
  const [articles, setArticles] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies(["mytoken"]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/myblogs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Token ${cookies}`,
        Authorization: `Token ${cookies["mytoken"]}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      })
      .then((res) => setArticles(res))
      .catch((e) => {
        if (e.status === 401) {
          // here you are able to do what you need
          // refresh token ..., logout the user ...
          console.log("Not Authenticated");
          removeCookie("mytoken");
          navigate("/signup");
        }

        return Promise.reject(e.json());
      });
    // .then(function (res) {
    //   if (res.status === 401) {
    //     // do what you need to do here
    //     console.log("Not Authenticated");
    //     removeCookie("mytoken");
    //     navigate("/signup")
    //   }
    // })
    // .then((res) => res.json())
    // .then((res) => setArticles(res))
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);
  // useEffect(() => {
  //   console.log(articles);
  // }, setArticles);

  const tableHeader = (
    <thead className="table-header">
      <tr>
        <th>Title</th>
        <th>Action</th>
      </tr>
    </thead>
  );
  return (
    <div style={{ padding: "100px" }}>
      {/* <BlogTable title={articles.title} id={articles.id}/> */}
      <div className="table-wrapper">
        <table className="fl-table">
          {tableHeader}
          {articles.map((article) => (
            <tbody className="table-row" key={article.id}>
              <tr>
                <td>{article.title}</td>
                <td>
                  <Link to={`/writeblog/${article.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyBlogs;
