import React from 'react';
import './App.css';

function App() {
  return (
      <div className='App'>
        <header className="App-header">
        <h1 className='name'>AMINE LEBRINI</h1>
          <ul className='list'>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <button className='btn'>
            <a href="#contact">Contact Me</a>
          </button>
      </header>
      <section id="about" className="about-section">
      <div className="text-content">
        <h1 className="title">ABOUT ME :</h1>
        <p className="description">
  I am <strong>Amine Lebrini</strong>, a 21-year-old passionate about software development and building impactful digital experiences. I’m fluent in <strong>Arabic, French, and English</strong>, which enables me to collaborate effectively across multicultural and cross-functional teams.
  <br /><br />
  As a <strong>Front-End Developer</strong>, I specialize in crafting responsive, high-performance web applications using <strong>HTML, CSS, JavaScript, and React</strong>.
  <br /><br />
  As a <strong>UI/UX Designer</strong>, I create intuitive, user-centered experiences using <strong>Figma</strong> and modern design systems—bridging the gap between design and development.
  <br /><br />
  I’m passionate about delivering <strong>clean, accessible, and scalable digital products</strong> across web platforms to craft seamless, engaging user experiences.
  <br /><br />
  Leading innovation as <strong>CEO of 01Coders Club</strong>, I’m committed to empowering developers and designers through collaboration, quality, and purposeful design.
</p>

        <div className="social-icons">
          <h4>Contact me:</h4>
          <a href="https://www.linkedin.com/in/amine-lebrini-76b526297/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/aminelebrini"><i className="fab fa-github"></i></a>
          <a href="https://x.com/AmineLebrini4"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/amine_lebrini_42/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@techno_coding"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="image-container">
        <div className="image-border">
          <img
            src="https://avatars.githubusercontent.com/u/113290995?v=4"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
      <section id="skills" className='content'>
        <h2 className='ski'>SKILLS</h2>
        <div className='skills'>
          <div class="sk">
            <i className="devicon-html5-plain"></i>
            <h3>HTML</h3>
          </div>

          <div class="sk">
            <i className="devicon-css3-plain"></i>
            <h3>CSS</h3>
          </div>

          <div class="sk">
            <i className="devicon-javascript-plain"></i>
            <h3>JavaScript</h3>
          </div>

          <div class="sk">
            <i className="devicon-figma-plain"></i>
            <h3>Figma</h3>
          </div>

          <div className="sk">
            <i className="fas fa-laptop-code"></i>
            <h3>Responsive Design</h3>
          </div>

          <div className="sk">
            <i className="fas fa-palette"></i>
            <h3>UI/UX</h3>
          </div>

          <div className="sk">
            <i className="devicon-vscode-plain"></i>
            <h3>VS Code</h3>
          </div>

          <div className="sk">
            <i className="devicon-c-plain"></i>
            <h3>C Programming</h3>
          </div>

          <div className="sk">
            <i className="devicon-git-plain"></i>
            <h3>Git</h3>
          </div>

          <div className="sk">
            <i className="devicon-react-plain"></i>
            <h3>React</h3>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/aminelebrini/amine.dev/blob/main/1731237098664.png?raw=true"
              alt="Project 1"
            />
          </div>
          <div className="project-content">
            <h3 className="project-title">E-commerce Website</h3>
            <p className="project-desc">
              A modern front-end e-commerce interface built with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. Includes product grid, shopping cart UI, filters, and responsive layout.
            </p>
            <a
              href="https://github.com/aminelebrini/Front-End-Projects/tree/main/ecom%20web"
               
              rel="noopener noreferrer"
              className="project-link"
            >
              🚀 View Live Project
            </a>
          </div>
        </div>

       
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/aminelebrini/amine.dev/blob/main/1731237098641.png?raw=true"
              alt="TECHNO CODING SCHOOL Project"
            />
          </div>
          <div className="project-content">
            <h3 className="project-title">TECHNO CODING SCHOOL</h3>
            <p className="project-desc">
              A modern educational front-end project for a coding school. Built with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. It includes login/signup forms, a learning dashboard, and interactive UI sections to engage new learners.
            </p>
            <a
              href="https://github.com/aminelebrini/Front-End-Projects/tree/main/TECHNO%20CODING%20SCHOOL"
               
              rel="noopener noreferrer"
              className="project-link"
            >
              🎓 View Live Project
            </a>
          </div>
        </div>

        
        <div className="project-card">
          <div className="project-image">
            <img
              src="https://github.com/aminelebrini/amine.dev/blob/main/28_05_2025%2021_57_40.png?raw=true"
              alt="01Coders Club"
            />
          </div>
          <div className="project-content">
            <h3 className="project-title">01Coders Club</h3>
            <p className="project-desc">
              A creative tech club I founded to unite passionate developers and designers under one vision: learn, build, and innovate. <strong>01Coders</strong> organizes coding challenges, project collaborations, and tech meetups to grow the community and enhance practical skills.
            </p>
            <div className="project-tags">
              <span>Community</span>
              <span>Leadership</span>
              <span>Tech Events</span>
              <span>Innovation</span>
            </div>
            <a
              href="https://01codersclub.pages.dev/"
               
              rel="noopener noreferrer"
              className="project-link"
            >
              🎓 View Live Project
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className='contact'>
        <h2 className='ski'>Contact Me</h2>

  <div class="div-links">
    <a href="mailto:aminelebrini4@gmail.com"   class="contact-link hover-cyan">
      <i class="fas fa-envelope icon text-cyan"></i>
  <h3 class="contact-text">aminelebrini4@gmail...</h3>
</a>


<a href="https://wa.me/212716038492"   class="contact-link hover-green">
  <i class="fab fa-whatsapp icon text-green"></i>
  <h3 class="contact-text">+212 7 16 03 84 92</h3>
</a>


<a href="https://www.instagram.com/amine_lebrini_42/"   class="contact-link hover-pink">
  <i class="fab fa-instagram icon text-pink"></i>
  <h3 class="contact-text">@amine_lebrini_42</h3>
</a>


<a href="https://www.linkedin.com/in/amine-lebrini-76b526297/"   class="contact-link hover-blue">
  <i class="fab fa-linkedin icon text-blue"></i>
  <h3 class="contact-text">Amine LEBRINI</h3>
</a>


<a href="https://x.com/AmineLebrini4"   class="contact-link hover-gray">
  <i class="fab fa-x-twitter icon text-gray"></i>
  <h3 class="contact-text">@AmineLebrini4</h3>
</a>


<a href="https://www.github.com/aminelebrini"   class="contact-link hover-white">
  <i class="fab fa-github icon text-white"></i>
  <h3 class="contact-text">aminelebrini</h3>
</a>
      </div>
    </section>
</div>
  );
}

export default App;
