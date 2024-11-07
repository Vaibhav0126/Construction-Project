import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import ServideImg from "../../assets/images/construction1.jpg";
import { apiurl, fileurl } from "../common/http";
import DOMPurify from "dompurify";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // For modal data
  const [showModal, setShowModal] = useState(false); // To show/hide modal

  const fetchProjects = async () => {
    const res = await fetch(apiurl + "get-projects", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status === true) {
      setProjects(result.data);
    }
  };

  const ProjectDetails = ({ project }) => {
    // Sanitize the content before rendering
    const sanitizedContent = DOMPurify.sanitize(project.content);

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
    fetchProjects();
  }, []);

  // Function to open modal and set selected project
  const handleReadMore = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Header />
      <div>
        <Hero
          preHeading="Projects"
          heading="Our Projects"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit provident dolore fugiat enim, beatae eius?"
        />
        <section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Our Construction Projects</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad
                obcaecati mollitia sint esse quod voluptate in quibusdam amet,
              </p>
            </div>
            <div className="row pt-4">
              {projects.map((project) => (
                <div className="col-md-3 col-lg-4" key={project.id}>
                  <div className="item">
                    <div className="service-image">
                      <img
                        src={`${fileurl}uploads/projects/small/${project.image}`}
                        className="w-100"
                        alt={project.title}
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{project.title}</h3>
                      </div>
                      <div className="service-content">
                        <p>{project.short_desc}</p>
                      </div>
                      <button
                        onClick={() => handleReadMore(project)}
                        className="btn btn-primary"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && selectedProject && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.short_desc}</p>
              <p>
                <strong>Location:</strong> {selectedProject.location}
              </p>
              <p>
                <strong>Construction Type:</strong>{" "}
                {selectedProject.construction_type}
              </p>
              <p>
                <strong>Sector:</strong> {selectedProject.sector}
              </p>
              <p>
                {/* Render sanitized content */}
                <ProjectDetails project={selectedProject} />
              </p>

              <img
                src={`${fileurl}uploads/projects/large/${selectedProject.image}`}
                alt={selectedProject.title}
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

export default Projects;
