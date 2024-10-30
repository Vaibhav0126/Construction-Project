import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Contact"
          heading="Contact Us"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit provident dolore fugiat enim, beatae eius?"
        />
        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Contact</span>
              <h2>Contact Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                <br />
                obcaecati mollitia sint esse quod voluptate in quibusdam amet,
              </p>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-3">
                  <div className="card shadow border-0 mb-3">
                    <div className="card-body p-4">
                      <h3>Call Us</h3>
                      <div>
                        <a href="#">(9996464100)</a>
                      </div>
                      <div>
                        <a href="#">(0000000000)</a>
                      </div>
                      <h3 className="mt-4">Email</h3>
                      <div>
                        <a href="#">vishal@gamil.com</a>
                      </div>
                      <div>
                        <a href="#">uncle@ji.com</a>
                      </div>
                      <h3 className="mt-4">Address</h3>
                      <div>
                        Rohtak
                        <br />
                        124001
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body p-5">
                      <form action="">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Name"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">
                              Phone
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Phone no."
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="" className="form-label">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Subject"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="" className="text-area">
                            Message
                          </label>
                          <textarea
                            placeholder="Message"
                            rows={5}
                            name=""
                            id=""
                            className="form-control form-control-lg"
                          ></textarea>
                        </div>
                        <button className="btn btn-primary large mt-3">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
