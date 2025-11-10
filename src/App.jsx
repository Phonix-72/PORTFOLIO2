import React from "react";
import Header from "./Header";
import About from"./About";
import Project from "./project";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Skill from "./Skill";
import GradientBlinds from './Blinds';






function App() {
  return (
    <>
    <Header></Header>

   


<section id="home" className="text-center py-5 position-relative" style={{ overflow: 'hidden', height: '600px' }}>
  
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
    <GradientBlinds
      gradientColors={[ '#5227FF', '#00FFAA']}

      angle={35}
      noise={1}
      blindCount={5}
      blindMinWidth={5}
      spotlightRadius={0.6}
      spotlightSoftness={1}
      spotlightOpacity={1}
      mouseDampening={0.1}
      distortAmount={10}
      shineDirection="left"
      mixBlendMode="light"
    />
  </div>

  
 <div className="container position-relative text-center" style={{ zIndex: 1 }}>
      {/* Animated Heading */}
      <h1 className=" display  text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-down">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Aravindh</span>
      </h1>
      

      {/* Animated Subtext */}
      <p className=" lead text-xl text-gray-300 font-semibold animate-fade-in-up">
        Full Stack Developer
      </p>
      <h1>Think. Build. Deploy</h1>
      <p>Where logic meets creativity.</p>
    
    
  

</div>
</section>
<About></About>
      <Project></Project>
      
      <Skill></Skill>

 



  
    
    



      


      

      
      

      {/* 📞 Contact Section */}
      <section id="contact" className="py-5 bg-light">
  <div className="container">
    <h2 className="section-title text-center fw-bold mb-4">Contact Me</h2>

    {/* social links row */}
    <div className="d-flex justify-content-center gap-4 mb-4 fs-3">

      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-danger"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-primary"
      >
        <i className="fab fa-facebook"></i>
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="text-success"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

    </div>

    <form>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          required
        />
      </div>

      {/* removed text area field */}

      <button type="submit" className="btn btn-warning text-dark">
        Send Message
      </button>
    </form>

  </div>
</section>


      {/* 💛 Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <div className="mb-3">
            <a
              href="https://www.instagram.com/_aravindh_.__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noreferrer"
              className="text-white mx-2"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="mb-0">&copy; 2025 Aravindh | Built with 💛</p>
        </div>
      </footer>
      


    </>
  );
  
}


export default App;
