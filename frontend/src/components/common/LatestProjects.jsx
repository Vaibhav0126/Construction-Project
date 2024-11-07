import React, { useEffect, useState } from "react";
import ServideImg from "../../assets/images/construction1.jpg";
import { apiurl, fileurl } from "./http";

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchLatestProjects = async () => {
    const res = await fetch(apiurl + "get-latest-projects?limit=2", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    if (result.status == true) {
      setProjects(result.data);
    }
  };
  useEffect(() => {
    fetchLatestProjects();
  }, []);
  return (
    <section className="section-3 bg-light py-5">
      <div className="container-fluid py-5">
        <div className="section-header text-center">
          <span>Our Projects</span>
          <h2>
            Our Latest
            <br />
            Construction Projects
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
            obcaecati mollitia sint esse quod voluptate in quibusdam amet,
          </p>
        </div>
        <div className="row pt-4">
          {projects &&
            projects.map((project) => (
              <div className="col-md-6 col-lg-6" key={project.id}>
                <div className="item">
                  <div className="service-image">
                    <img
                      src={`${fileurl}uploads/projects/small/${project.image}`}
                      className="w-100"
                    />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>{project.title}</h3>
                    </div>
                    <div className="service-content">
                      <p>{project.short_desc}</p>
                    </div>
                    {/* <a href="/projects" className="btn btn-primary">
                      Read More
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
