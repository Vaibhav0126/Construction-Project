import React, { useEffect, useState } from "react";
import ServideImg from "../../assets/images/construction1.jpg";
import { apiurl, fileurl } from "./http";

const LatestServices = () => {
  const [services, setServices] = useState([]);
  const fetchLatestServices = async () => {
    const res = await fetch(apiurl + "get-latest-services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    console.log(result);
    setServices(result.data);
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);
  return (
    <section className="section-3 bg-light py-5">
      <div className="container-fluid py-5">
        <div className="section-header text-center">
          <span>Our Services</span>
          <h2>Our construction services</h2>
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
                <div className="col-md-3 col-lg-3">
                  <div className="item">
                    <div className="service-image">
                      <img
                        src={`${fileurl}uploads/services/small/${service.image}`}
                        className="w-100"
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="service-content">
                        <p>{service.short_desc}</p>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default LatestServices;
