import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Hero */}
      <header className="hero">
        <h1>Hi, I'm Sadu 👋</h1>

        <h2>BSc Science Graduate | QA Engineer</h2>

        <p className="subtitle">
          QA Engineer | Frontend Developer | Full Stack Developer
        </p>

        <p>
          I am a BSc Science graduate from the University of Jaffna,
          currently awaiting my convocation. I am focused on building my
          career in Quality Assurance, with practical experience in manual
          testing, API testing, test automation, and software development.
        </p>
      </header>

      {/* About */}
      <section>
        <h3>About Me</h3>

        <p>
          I am interested in Software Quality Assurance and test automation.
          I have hands-on experience designing test cases, performing manual
          and regression testing, reporting defects, and testing REST APIs.
        </p>

        <p>
          I also developed an API test automation framework using Playwright
          and JavaScript, including automated positive, negative, and
          edge-case tests, JSON Schema validation, and GitHub Actions CI.
        </p>

        <p>
          Alongside QA, I have experience developing web applications using
          React, JavaScript, Node.js, Express.js, and MongoDB.
        </p>
      </section>

      {/* QA Skills */}
      <section>
        <h3>QA Engineering Skills</h3>

        <div className="skills">
          <span>Manual Testing</span>
          <span>Functional Testing</span>
          <span>Regression Testing</span>
          <span>API Testing</span>
          <span>Postman</span>
          <span>Playwright</span>
          <span>JavaScript</span>
          <span>Test Case Design</span>
          <span>Bug Reporting</span>
          <span>JSON Schema Validation</span>
          <span>GitHub Actions</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* API Automation Project */}
      <section>
        <h3>QA Projects</h3>

        <div className="project project-api">
          <h4>API Test Automation Suite</h4>

          <p>
            Developed an API test automation framework from scratch using
            Playwright and JavaScript. The test suite contains 21 automated
            test cases covering positive, negative, and edge-case scenarios.
          </p>

          <p>
            The framework includes JSON Schema validation and a GitHub Actions
            CI pipeline that automatically runs the test suite whenever code
            is pushed to GitHub.
          </p>

          <p>
            I also applied the framework to my university project and
            identified a privilege-escalation vulnerability that allowed
            users to register with administrator privileges.
          </p>

          <p>
            <strong>Technologies:</strong> Playwright, JavaScript, REST API,
            JSON Schema, GitHub Actions
          </p>

          <a
            href="https://github.com/sadhu2226/api-test-suite"
            target="_blank"
            rel="noopener noreferrer"
          >
            View API Test Suite on GitHub →
          </a>
        </div>
      </section>

      {/* University Project */}
      <section>
        <h3>University Project</h3>

        <div className="project project-academic">
          <h4>Institute Management System</h4>

          <p>
            Developed a full-stack institute management system as part of my
            BSc final-year project using React, Node.js, Express.js, and
            MongoDB.
          </p>

          <p>
            My responsibilities included test planning, test case design,
            manual testing, regression testing, bug identification, and
            documentation.
          </p>

          <p>
            <strong>Technologies:</strong> React, JavaScript, Node.js,
            Express.js, MongoDB, Postman
          </p>
        </div>
      </section>

      {/* Development Skills */}
      <section>
        <h3>Development Skills</h3>

        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>HTML & CSS</span>
          <span>Tailwind CSS</span>
          <span>Git & GitHub</span>
          <span>Figma</span>
          <span>UI/UX Design</span>
        </div>
      </section>

      

      {/* Contact */}
      <section>
        <h3>Contact</h3>

        <p>
          Email:{" "}
          <a href="mailto:vinosadu123@gmail.com">
            vinosadu123@gmail.com
          </a>
        </p>

        <p>Phone: 0784588538</p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mathiyalagan-sadurjan-38367b3a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mathiyalagan-sadurjan-38367b3a3
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sadhu2226"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sadhu2226
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Sadhu | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;