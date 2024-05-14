const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span clsas="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Modern Interior Design Studio specializes in creating sleek,
                  contemporary spaces that blend functionality with cutting-edge
                  design aesthetics.
                </p>
                <p>
                  <a href="/shop" className="btn btn-secondary me-2">
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
                <img src="./Assets/images/file (4).png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Crafted with excellent materials, our designs are built to last
                and elevate any space with style and sophistication.
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="./Assets/images/product-1.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src="./Assets/images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="./Assets/images/product-2.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
                <span className="icon-cross">
                  <img src="./Assets/images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img
                  src="./Assets/images/product-3.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>
                <span className="icon-cross">
                  <img src="./Assets/images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </div>

      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Choose us for our top-quality designs tailored to your needs,
                excellent customer service, and use of the finest materials and
                innovative techniques.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="./Assets/images/truck.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Choose us for fast and free shipping on all orders,
                      ensuring your products reach you in no time without any
                      extra cost.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="./Assets/images/bag.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Choose us for an easy shopping experience, with a
                      user-friendly website and straightforward ordering
                      process, making your shopping experience hassle-free.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="./Assets/images/support.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      24/7 Support: Get help whenever you need it, day or night,
                      from our dedicated team.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="./Assets/images/return.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Hassle-Free Returns: Enjoy a simple and straightforward
                      return process for your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="./Assets/images/why-choose-us-img.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}

      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="./Assets/images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="./Assets/images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="./Assets/images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                We assist you in creating modern interior designs that reflect
                your style and preferences.
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>
                  Consultation to understand your design preferences and
                  requirements.
                </li>
                <li>
                  Customized design plans tailored to your space and budget.
                </li>
                <li>
                  Color scheme selection to create a cohesive and modern look.
                </li>
                <li>
                  Final styling and finishing touches to bring your vision to
                  life.
                </li>
              </ul>
              <p>
                <a herf="#" className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="./Assets/images/product-1.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Nordic chairs, with their minimalist designs and use of
                    natural materials, are a popular choice for modern
                    interiors, offering both aesthetic appeal and comfort.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="./Assets/images/product-2.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    The Kruzo Aero chair combines sleek, modern design with
                    ergonomic comfort, making it an ideal choice for
                    contemporary interiors.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="./Assets/images/product-3.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    The ergonomic chair is designed to provide optimal support
                    and comfort, promoting good posture and reducing the risk of
                    musculoskeletal issues.
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <a href="#" className="more">
                View All Posts
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="./Assets/images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Evan Smith</a>
                    </span>
                    <span>
                      on <a href="#">Dec 19, 2023</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="./Assets/images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Evan Smith</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2023</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="./Assets/images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Evan Smith</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2023</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
