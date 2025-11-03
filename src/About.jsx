import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
   
    const timer = setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" }); // smooth scroll
      }
    }, 1000);

    // Clean up the timer if component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
<section id="about" class="about">
    <h2>About Me</h2>
    <div class="about-container">
      <div class="about-photo">
        <div class="photo-card">
          <img src="/338.jpg" alt="Aravindh" />
        </div>
      </div>
      <div class="about-text">
        <p>
          I am <strong>Aravindh</strong>, a passionate Full Stack Developer with a strong foundation in backend technologies and a flair for crafting modern, responsive web interfaces.  
          I love combining creativity and logic to design scalable, user-focused solutions.
          With expertise in <span class="highlight">Python</span>, <span class="highlight">Django</span>, and <span class="highlight">React</span>, I enjoy turning complex ideas into intuitive, efficient applications that empower users.
        </p>
        <a href="#projects" class="btn" >Explore My Projects</a>
      </div>
    </div>
  </section>

  
  
      
     
    </>
  );
}

export default About;
