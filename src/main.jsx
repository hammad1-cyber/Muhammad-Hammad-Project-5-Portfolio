import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Medicare Healthcare",
    type: "Business Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Healthcare website with services, doctors, appointment booking, contact pages, and responsive layouts.",
    image: `${import.meta.env.BASE_URL}projects/project-1-medical.JPG`,
    website:
      "https://hammad1-cyber.github.io/project-1-medical-website/",
    github:
      "https://github.com/hammad1-cyber/project-1-medical-website",
    marker: "01"
  },
  {
    number: "02",
    title: "EduTrack",
    type: "Student Management Dashboard",
    technologies: ["React", "CSS", "Mock API"],
    description:
      "Functional academic dashboard for students, courses, attendance, results, search, and filtering.",
    image: `${import.meta.env.BASE_URL}projects/project-2-student.JPG`,
    website:
      "https://hammad1-cyber.github.io/project-2-student-management/",
    github:
      "https://github.com/hammad1-cyber/project-2-student-management",
    marker: "02"
  },
  {
    number: "03",
    title: "Product Explorer",
    type: "API E-commerce",
    technologies: ["React", "JavaScript", "REST API"],
    description:
      "API-powered product explorer with categories, sorting, product details, favorites, and cart calculations.",
    image: `${import.meta.env.BASE_URL}projects/project-3-products.JPG`,
    website:
      "https://hammad1-cyber.github.io/project-3-api-product-explorer/",
    github:
      "https://github.com/hammad1-cyber/project-3-api-product-explorer",
    marker: "03"
  },
  {
    number: "04",
    title: "Isobar Weather",
    type: "Weather Application",
    technologies: ["React", "JavaScript", "Weather API"],
    description:
      "Real weather experience with current conditions, hourly and daily forecasts, searches, and error and loading states.",
    image: `${import.meta.env.BASE_URL}projects/project-4-weather.JPG`,
    website:
      "https://hammad1-cyber.github.io/project-4-weather-app/",
    github:
      "https://github.com/hammad1-cyber/project-4-weather-app",
    marker: "04"
  }
];

const skills = [
  [
    "React",
    "Reusable components and frontend architecture"
  ],
  [
    "JavaScript",
    "Interactive functionality and API integration"
  ],
  [
    "HTML / CSS",
    "Semantic markup, layouts and responsive UI"
  ],
  [
    "REST APIs",
    "Data fetching, loading and error handling"
  ],
  [
    "Git / GitHub",
    "Version control and deployment"
  ],
  [
    "Responsive Design",
    "Interfaces across different devices"
  ]
];

const roadmapDescriptions = [
  "Core HTML, CSS and JavaScript foundation",
  "React dashboard architecture and state",
  "React and REST API product experience",
  "React and live weather API experience"
];

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const go = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setMenu(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="app">

      <header className="nav">

        <button
          className="brand"
          type="button"
          onClick={() => go("home")}
          aria-label="Go to home"
        >
          <b>MH</b>
          <span>Muhammad Hammad</span>
        </button>

        {/* <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button> */}

        <nav className={menu ? "links open" : "links"}>

          {["Home", "About", "Projects", "Skills", "Contact"].map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => go(item)}
              >
                {item}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "LIGHT" : "DARK"}
          </button>

        </nav>
      </header>

      <main>

        {/* ================================
            HOME
            ================================ */}

        <section id="home" className="hero section">

          <div>

            <div className="eyebrow">
              <i />
              AVAILABLE FOR FRONTEND PROJECTS
            </div>

            <h1>
              Building digital experiences that{" "}
              <em>feel real.</em>
            </h1>

            <p className="lead">
              I&apos;m Muhammad Hammad, a frontend developer focused on
              responsive, functional web applications with clean
              interfaces and practical user experiences.
            </p>

            <div className="actions">

              <button
                className="primary"
                type="button"
                onClick={() => go("projects")}
              >
                Explore my work
              </button>

              <button
                className="secondary"
                type="button"
                onClick={() => go("contact")}
              >
                Let&apos;s talk
              </button>

            </div>

            <div className="meta">

              <span>
                <b>04</b> completed projects
              </span>

              <span>
                <b>100%</b> deployed and testable
              </span>

            </div>

          </div>

          <div className="code">

            <div className="dots">
              <i />
              <i />
              <i />
              <small>developer.profile</small>
            </div>

            <pre>
              <span>const</span> developer = {"{"}
              {"\n"}  name: <b>&quot;Muhammad Hammad&quot;</b>,
              {"\n"}  role: <b>&quot;Frontend Developer&quot;</b>,
              {"\n"}  stack: [
              <b>&quot;React&quot;</b>, <b>&quot;JavaScript&quot;</b>,{" "}
              <b>&quot;CSS&quot;</b>],
              {"\n"}  focus: <b>&quot;Real working products&quot;</b>
              {"\n"}{"}"}
            </pre>

            <div className="status">
              OPEN TO OPPORTUNITIES
            </div>

          </div>

        </section>

        {/* ================================
            ABOUT
            ================================ */}

        <section id="about" className="section line">

          <label>01 - ABOUT</label>

          <div className="two">

            <h2>
              Not just interfaces.
              <br />
              <span>Working products.</span>
            </h2>

            <div className="copy">

              <p>
                My project roadmap progresses from core web development
                to React dashboards, API-powered applications, and
                real-time data experiences.
              </p>

              <p>
                Every project is designed to be usable, responsive, and
                deployable - not simply a static UI concept.
              </p>

            </div>

          </div>

        </section>

        {/* ================================
            PROJECTS
            ================================ */}

        <section id="projects" className="section line">

          <div className="heading">

            <div>

              <label>02 - SELECTED WORK</label>

              <h2>
                Projects that{" "}
                <span>actually work.</span>
              </h2>

            </div>

            <p>
              Four deployed projects. Four different challenges. One
              continuous learning path.
            </p>

          </div>

          <div className="grid">

            {projects.map((project) => (

              <article
                className="card"
                key={project.number}
              >

                {/* PROJECT SCREENSHOT */}

                <div className="visual">

                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                  />

                  <small>{project.number}</small>

                </div>

                {/* PROJECT INFORMATION */}

                <div className="content">

                  <label>{project.type}</label>

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="tags">

                    {project.technologies.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>

                  <div className="features">

                    <span>OK Responsive UI</span>
                    <span>OK Functional features</span>
                    <span>OK Deployed</span>

                  </div>

                  <div className="project-actions">

                    <a
                      className="primary small"
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Project
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ================================
            ROADMAP
            ================================ */}

        <section className="section line">

          <label>03 - ROADMAP</label>

          <div className="roadmap">

            {projects.map((project, index) => (

              <div key={project.number}>

                <b>{project.number}</b>

                <small>
                  PROJECT {project.number}
                </small>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {roadmapDescriptions[index]}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ================================
            SKILLS
            ================================ */}

        <section id="skills" className="section line">

          <label>04 - SKILLS</label>

          <div className="skills">

            {skills.map((skill, index) => (

              <div key={skill[0]}>

                <small>
                  {String(index + 1).padStart(2, "0")}
                </small>

                <div>

                  <h3>
                    {skill[0]}
                  </h3>

                  <p>
                    {skill[1]}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================================
            CONTACT
            ================================ */}

        <section
          id="contact"
          className="section line contact"
        >

          <div>

            <label>05 - CONTACT</label>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p className="copy">
              Let&apos;s build something useful, polished, and genuinely
              functional.
            </p>

            <div className="details">

              <a href="mailto:darhammad8611@gmail.com">
                darhammad8611@gmail.com
              </a>

              <a href="tel:+923156016202">
                +92 315 6016202
              </a>

            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <label>
              Name

              <input
                required
                name="name"
                placeholder="Your name"
              />
            </label>

            <label>
              Email

              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Message

              <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
              />
            </label>

            <button
              className="primary"
              type="submit"
            >
              Send message
            </button>

            {sent && (
              <div className="success">
                Thanks! Please use the email address shown beside the
                form to send your message.
              </div>
            )}

          </form>

        </section>

      </main>

      {/* ================================
          FOOTER
          ================================ */}

      <footer>

        <span>
          MH&nbsp; Muhammad Hammad
        </span>

        <span>
          (c) 2026 Muhammad Hammad - React and CSS
        </span>

        <button
          type="button"
          onClick={() => go("home")}
        >
          Back to top
        </button>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);