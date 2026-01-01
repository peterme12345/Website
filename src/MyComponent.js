import React from "react";
import "./style.css"; // Import CSS file for component styles
import { toggleMenu } from "./script.js";
import profileImage from "./assets/IMG_9884.JPG";
import linkedin from "./assets/linkedin.png";
import git from "./assets/git.png";
import pfp from "./assets/pfp.jpeg";
import exp from "./assets/experience.png";
import edu from "./assets/education.png";
import arrow from "./assets/arrow.png";
import check from "./assets/check.png";
import card from "./assets/card.png";
import bod from "./assets/bod.png";
import mail from "./assets/mail.png";

function MyComponent() {
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Peter Nguyen</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Peter Nguyen</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={profileImage}
            alt="Profile Picture"
            width="400px"
            height="300px"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Peter Nguyen</h1>
          <p className="section__text__p2">Computer Science Major</p>
          <div className="btn-container">
            <a href="/Resume.pdf" download className="btn btn-color-2">
              Download Resume
            </a>
            <a href="/CV.pdf" download className="btn btn-color-2">
              Download CV
            </a>

            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <a
              href="https://linkedin.com/in/peter-nguyen-np389/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="My LinkedIn profile" className="icon" />
            </a>
            <a
              href="https://github.com/peterme12345"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="My Github profile" className="icon" />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get to Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={pfp} alt="Profile Picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={exp} alt="Experience Icon" className="icon" />
                <h3>Experience</h3>
                <p>Current: Data Entry Specialist</p>
              </div>
              <div className="details-container">
                <img src={edu} alt="Education Icon" className="icon" />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree <br /> Computer Science
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I'm a recent computer scientist graduate looking to develop my
                skills as a software engineer. I have a passion for game
                development and finding solutions to improve the quality of life
                of customers.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article container">
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Javascript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>ReactJs</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article container">
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Python</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>NodeJs</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>C++</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>ExpressJs</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Java</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Work</h2>
              <div className="article container">
                <h4>Small Business Growth Alliance</h4>
                <p>Apr. 2025 - Present</p>
                <h4>Deutsche Bank</h4>
                <p>Aug. 2024 - Apr. 2025</p>
                <h4>Towne Park</h4>
                <p>May 2024 - Jul. 2024</p>
                <p>Associate</p>
                <h4>Summerfield Tea Bar</h4>
                <p>Aug. 2023 - May 2024</p>
                <p>Barista</p>
                <h4>Popeyes</h4>
                <p>May 2023 - Jul. 2023</p>
                <p>Cashier</p>
                <h4>Media Assistant</h4>
                <p>Sept. 2021 - Jun. 2022</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse my Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={card} alt="K Project" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">K Project</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/peterme12345/K-project")
                  }
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={bod} alt="Portfolio" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Portfolio Website
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/peterme12345/Website")
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={mail} alt="Email icon" className="icon contact-icon" />
            <p>
              <a href="mailto:npeter389@gmail.com">npeter389@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/peter-nguyen-np389">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default MyComponent;
