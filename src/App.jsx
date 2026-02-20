import "./App.css";

function App() {
  return (
    <div className="container">
      
      <header className="hero">
        <h1>Hi, I'm Sadhu 👋</h1>
        <h2>BSc Science Graduate (Computer Science)</h2>
        <p className="subtitle">
          Frontend Developer | QA Enthusiast | Full Stack Developer
        </p>
        <p>
          I am currently awaiting my convocation and passionate about building
          modern web applications while ensuring high-quality software standards.
        </p>
      </header>

      <section>
        <h3>About Me</h3>
        <p>
          I specialize in React, Node.js, and MongoDB. I have experience
          developing full-stack applications and performing manual testing,
          debugging, and validating software projects. Currently, I am building
          an AI-based Video Translation System as a personal project.
        </p>
      </section>

      <section>
        <h3>Technical Skills</h3>
        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>HTML & CSS</span>
          <span>Git & GitHub</span>
          <span>Manual Testing</span>
          <span>API Testing (Postman)</span>
        </div>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="project">
          <h4>AI Video Translation System</h4>
          <p>
            Full-stack web application that translates video speech using AI.
            Built with React frontend and Node.js backend.
          </p>
        </div>

        <div className="project">
          <h4>University Academic Project</h4>
          <p>
            Developed a management system for an institute as part of my BSc curriculum using
            modern web technologies.
          </p>
        </div>
      </section>

      <section>
        <h3>QA Skills</h3>
        <ul>
          <li>Manual Testing</li>
          <li>Bug Reporting & Documentation</li>
          <li>Functional Testing</li>
          <li>API Testing</li>
          <li>Code Review & Validation</li>
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <p>Email: vinosadu123@gmail.com</p>
        <p>Phone: 0784588538</p>
        <p>Linkedin: linkedin.com/in/mathiyalagan-sadurjan-38367b3a3</p>
        <p>GitHub: https://github.com/sadhu2226</p>
      </section>

      <footer>
        <p>© 2026 Sadhu | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;