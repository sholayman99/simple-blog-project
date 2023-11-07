import { useEffect, useState } from "react";
import { postCategories } from "../apiRequest/apiRequest";
import { NavLink } from "react-router-dom";

const Layout = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      if (sessionStorage.getItem("categories")) {
        let res = sessionStorage.getItem("categories");
        setCategories(JSON.parse(res));
      } else {
        let res = await postCategories();
        setCategories(res);
        sessionStorage.setItem("categories", JSON.stringify(res));
      }
    })();
  }, []);

  return (
    <div>
      <div className="navbar shadow-xl fixed top-0 z-50 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>হোম</NavLink>
              </li>
              {categories.map((item, index) => {
                return (
                  <li key={index.toString()}>
                    <NavLink to={"/byCategory/" + item["id"]}>
                      {item["name"]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Simple Blog Project </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>হোম</NavLink>
            </li>
            {categories.map((item, index) => {
              return (
                <li key={index.toString()}>
                  <NavLink to={"/byCategory/" + item["id"]}>
                    {item["name"]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
