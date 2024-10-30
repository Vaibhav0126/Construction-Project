import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServideImg from "../../assets/images/construction1.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <div>
        <Hero
          preHeading="Services"
          heading="Service"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit provident dolore fugiat enim, beatae eius?"
        />
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Our construction services</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                obcaecati mollitia sint esse quod voluptate in quibusdam amet,
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil COnstruction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil COnstruction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil COnstruction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ServideImg} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Civil COnstruction</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur beatae facilis inventore accusantium id,
                        debitis eos.
                      </p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
