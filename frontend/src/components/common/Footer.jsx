import React from "react";
import Nav from "react-bootstrap/Nav";

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
                <Nav.Link href="/about" className="nav-link">
                  About Us
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/services" className="nav-link">
                  Services
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/projects" className="nav-link">
                  Projects
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/contact" className="nav-link">
                  Contact Us
                </Nav.Link>{" "}
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
