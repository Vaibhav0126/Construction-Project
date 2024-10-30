import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const Aboutcomp = () => {
  return (
    <div>
      {/* About Us */}
      <section className="section-2 py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <span>about us</span>
              <h2>Building the Future Together</h2>
              <p>
                At Chhikara Constructions, we are dedicated to transforming
                visions into reality through quality construction and innovative
                solutions. With NO experience, we specialize in residential,
                commercial, and infrastructure projects. Our commitment to
                excellence and integrity drives us to exceed client expectations
                and contribute positively to our community. As we look to the
                future, we embrace sustainability and advanced technologies to
                ensure that every project is built to last. Join us as we
                construct not just buildings, but the foundation for a better
                tomorrow.
              </p>
            </div>
            <div className="col-md-6">
              <img src={AboutImg} className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutcomp;
