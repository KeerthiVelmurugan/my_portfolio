
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left: Introduction */}
        <div className="hero-content">
          <p className="hero-label">
            <span className="hero-label-dot"></span>
            PYTHON FULL STACK DEVELOPER
          </p>

          <h1>
            Building Web Applications.
            <span> Solving Real Problems.</span>
          </h1>

          <h2>
            Hi, I'm <span>Keerthi M</span>
          </h2>

          <p className="hero-description">
            I develop reliable and user-friendly web applications
            using Python, Django, Django REST Framework, MySQL,
            and React.js. I enjoy solving real-world problems
            through clean code and practical solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">
              Explore My Work <span>↗</span>
            </a>

            <a
              href="/Keerthi_M_Python_Full_Stack_Developer.pdf"
              className="hero-btn secondary-btn"
              download
            >
              <span>↓</span> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/KeerthiVelmurugan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/keerthi-v-b6848525a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <p className="hero-location">
            <span>⌖</span> Coimbatore, India
          </p>
        </div>

        {/* Right: Photo and Skills */}
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring">
              <div className="hero-photo">
                {/* Replace this placeholder with your image */}
               <img
        src="/image1.png"
        alt="Keerthi M - Python Full Stack Developer"
        className="profile-image"
      />

                <div className="photo-placeholder">
                  <span className="placeholder-icon">KM</span>
                  <p>Add Your Photo</p>
                  <small>keerthi-profile.jpg</small>
                </div>
              </div>
            </div>

            <div className="photo-decoration decoration-top">
              <span>✦</span> Python
            </div>

            <div className="photo-decoration decoration-bottom">
              <span>✧</span> React.js
            </div>
          </div>

          <div className="hero-tech-card">
            <div className="tech-item">
              <span className="tech-icon">Py</span>
              <div>
                <strong>Backend</strong>
                <p>Python · Django</p>
              </div>
            </div>

            <div className="tech-item">
              <span className="tech-icon">JS</span>
              <div>
                <strong>Frontend</strong>
                <p>React · JavaScript</p>
              </div>
            </div>

            <div className="tech-item">
              <span className="tech-icon">DB</span>
              <div>
                <strong>Database</strong>
                <p>MySQL</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
