import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#EEEFFB" }}>
      <footer className="background-color py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-3">
              <Link passHref href="">
                <a href="#" className="navbar-brand">
                  <h2 className="footer-logo-text">Hekto</h2>
                </a>
              </Link>

              <div style={{ width: "257px" }} className="input-group mb-4">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="form-control border-0"
                />
                <div className="input-group-append">
                  <button
                    style={{
                      backgroundColor: "#FB2E86",
                      color: "#EEEFFB",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                    className="btn px-3"
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="footer-text mb-0">Contact info</p>
              <p className="footer-text">
                No 18 grace avenue, akpaju greenland
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3 ">
              <h5 className="footer-head-text mb-3">Categories</h5>

              <ul className="list-unstyled">
                <li className="mb-3 ">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Laptop &amp; Computers
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Cameras &amp; Photography
                    </a>
                  </Link>
                </li>
                <li className="mb-3  ">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Smart phone &amp; Tablet
                    </a>
                  </Link>
                </li>
                <li className="mb-3 ">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      video games &amp; console
                    </a>
                  </Link>
                </li>
                <li className="mb-3 ">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Waterproof Headphone
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <h5 className="footer-head-text  mb-3">Customer Care</h5>

              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      My Account
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Discount
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Returns
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Order history
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      order Tracking
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <h5 className="footer-head-text mb-3">Pages</h5>

              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Browse the shop
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Category
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Pre-built Pages
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Visual Composer Elments
                    </a>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link passHref href="">
                    <a href="#" className="footer-text">
                      Woo commerce pages
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
