import React from "react";

const projects = [
  {
    title: "BUSSBEE",
    category: "SCHOOL BUS WEBSITE",
    date: "Mar 22, 2025",
    image: "./PR1.png",
    
  },
  {
    title: "AUTOMOBILE :MOTOFIX",
    category: "E-Commerce",
    date: "MAY 20, 2025",
    image: "./PR2.png",
    href:"h.html"
  },
  {
    title: "My Portfolio",
    category: "FRONT END",
    date: "sep 23, 2025",
    image: "./PR3.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>Selected Works — Designed & Developed</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-thumb">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="category">{project.category}</p>
              <p className="date">{project.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>more projects comming soon ....</h2>
      </div>
    </section>
  );
};

export default Projects;
