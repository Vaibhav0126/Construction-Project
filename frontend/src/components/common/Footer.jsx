import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3>Chhikara Constructions</h3>
            <div className="pe-5">
              <p>Quality Construction Services You Can Rely On</p>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="">Vishal</a>
              </li>
              <li>
                <a href="">Vishal</a>
              </li>
              <li>
                <a href="">Vishal</a>
              </li>
              <li>
                <a href="">Vishal</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">9996464100</a>
              </li>
              <li>
                <a href="">uncle@uncle.com</a>
              </li>
              <p>
                hno. 69 uncle
                <br />
                Rohtak, Haryana <br />
                124001
              </p>
            </ul>
          </div>
          <hr />
          <div className="text-center pt-3">copyright</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
