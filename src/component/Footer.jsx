import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores repellat, provident enim ad recusandae ipsum dicta
              cumque excepturi nihil sed?
            </p>
          </div>

          <div className="col-xs-6 col-md-3 col-sm-12">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Cloud Computing</a>
              </li>
              <li>
                <a href="#">UI Design</a>
              </li>
              <li>
                <a href="#">Web Devlopment</a>
              </li>
              <li>
                <a href="#">AI</a>
              </li>
              <li>
                <a href="#">Android </a>
              </li>
              <li>
                <a href="#">Others</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3 col-sm-12">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <strong className="mx-2">Parvez Alam</strong>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
