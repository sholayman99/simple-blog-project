import * as React from "react";

import { Link } from "react-router-dom";

const BlogList = ({ newsList }) => {
  return (
    <div>
      <div className="container my-16 mx-auto p-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsList.map((item, index) => {
            return (
              <Link to={"/detailsPage/" + item['id']} key={index} className="card w-100 glass">
                <figure>
                  <img src={item["img"]} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item["title"]} </h2>
                  <p>{item["short"]} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
