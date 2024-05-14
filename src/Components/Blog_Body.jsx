import React from "react";
import { posts } from "../Constants/Blog_Data";
const Blog_Body = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Blog</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="./Assets/images/couch.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={post.image} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">{post.title}</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">{post.author}</a>
                      </span>{" "}
                      <span>
                        on <a href="#">{post.date}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_Body;
