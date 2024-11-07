import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiurl, fileurl } from "../common/http";
import DOMPurify from "dompurify";

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // For modal data
  const [showModal, setShowModal] = useState(false); // To show/hide modal

  const fetchLatestServices = async () => {
    const res = await fetch(apiurl + "get-services", {
      method: "GET",
    });
    const result = await res.json();
    console.log(result);
    setServices(result.data);
  };

  // Component to render sanitized content
  const ProjectDetails = ({ service }) => {
    const sanitizedContent = DOMPurify.sanitize(service.content);

    return (
      <div className="project-content">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizedContent, // Safe content for rendering
          }}
        />
      </div>
    );
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);

  // Function to open modal and set selected service
  const handleReadMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <>
      <Header />
      <div>
        <Hero
          preHeading="Services"
          heading="Services"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit provident dolore fugiat enim, beatae eius?"
        />
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Our Construction Services</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                obcaecati mollitia sint esse quod voluptate in quibusdam amet,
              </p>
            </div>
            <div className="row pt-4">
              {services &&
                services.map((service) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="col-md-3 col-lg-4" key={service.id}>
                      <div className="item">
                        <div className="service-image">
                          <img
                            src={`${fileurl}uploads/services/small/${service.image}`}
                            className="w-100"
                            alt={service.title}
                          />
                        </div>
                        <div className="service-body">
                          <div className="service-title">
                            <h3>{service.title}</h3>
                          </div>
                          <div className="service-content">
                            <p>{service.short_desc}</p>
                          </div>
                          <button
                            onClick={() => handleReadMore(service)}
                            className="btn btn-primary"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && selectedService && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.short_desc}</p>

              <p>
                <ProjectDetails service={selectedService} />
              </p>

              <img
                src={`${fileurl}uploads/services/large/${selectedService.image}`}
                alt={selectedService.title}
                className="w-100"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Services;
