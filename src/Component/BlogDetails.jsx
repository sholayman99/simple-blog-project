import * as React from "react";

const BlogDetails = ({ newsList }) => {
  return (
    <div>
      <div className="container my-16 mx-auto p-9">
        <div className="grid grid-cols-1 gap-6">
          <div className="card w-100 glass">
            <figure>
              <img src={newsList['postDetails']['img']} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {newsList['postDetails']['title']}
              </h2>
              <p> {newsList['postDetails']['content']} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
