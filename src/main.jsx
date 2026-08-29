import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Medicare Healthcare",
    category: "Business Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}projects/project-1-medical.JPG`,
    description:
      "Healthcare website with services, doctors, appointment booking, contact pages, and responsive layouts.",
    liveUrl:
      "https://hammad1-cyber.github.io/project-1-medical-website/",
    githubUrl:
      "https://github.com/hammad1-cyber/project-1-medical-website",
    icon: "✓",
  },
  {
    number: "02",
    title: "EduTrack",
    category: "Student Management Dashboard",
    technologies: ["React", "CSS", "Mock API"],
    image: `${import.meta.env.BASE_URL}projects/project-2-student.JPG`,
    description:
      "Functional academic dashboard for students, courses, attendance, results, search, and filtering.",
    liveUrl:
      "https://hammad1-cyber.github.io/project-2-student-management/",
    githubUrl:
      "https://github.com/hammad1-cyber/project-2-student-management",
    icon: "◆",
  },
  {
    number: "03",
    title: "Product Explorer",
    category: "API E-commerce",
    technologies: ["React", "JavaScript", "REST API"],
    image: `${import.meta.env.BASE_URL}projects/project-3-products.JPG`,
    description:
      "API-powered product explorer with categories, sorting, product details, favorites, and cart calculations.",
    liveUrl:
      "https://hammad1-cyber.github.io/project-3-api-product-explorer/",
    githubUrl:
      "https://github.com/hammad1-cyber/project-3-api-product-explorer",
    icon: "◇",
  },
  {
    number: "04",
    title: "Isobar Weather",
    category: "Weather Application",
    technologies: ["React", "JavaScript", "Weather API"],
    image: `${import.meta.env.BASE_URL}projects/project-4-weather.JPG`,
    description:
      "Real weather experience with current conditions, hourly and daily forecasts, searches, and error/loading states.",
    liveUrl:
      "https://hammad1-cyber.github.io/project-4-weather-app/",
    githubUrl:
      "https://github.com/hammad1-cyber/project-4-weather-app",
    icon: "☼",
  },
];

const skills = [
  ["React", "Reusable components and frontend architecture"],
  ["JavaScript", "Interactive functionality and API integration"],
  ["HTML / CSS", "Semantic markup, layouts and responsive UI"],
  ["REST APIs", "Data fetching, loading and error handling"],
  ["Git / GitHub", "Version control and deployment"],
  ["Responsive Design", "Interfaces across devices"],
];

const roadmapDescriptions = [
  "Core HTML, CSS and JavaScript foundation",
  "React dashboard architecture and state",
  "React and REST API product experience",
  "React and live weather API experience",
];

function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenu(false);
  };

  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="nav">

        <button
          className="brand"
          onClick={() => go("home")}
          type="button"
        >
          <b>MH</b>
          <span>Muhammad Hammad</span>
        </button>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          type="button"
          aria-label="Toggle navigation"
        >
          {menu ? "×" : "☰"}
        </button>

        <nav className={menu ? "links open" : "links"}>

          {["home", "about", "projects", "skills", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => go(item)}
                type="button"
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={() => setDark(!dark)}
            type="button"
            aria-label="Toggle theme"
          >
            {dark ? "☀" : "☾"}
          </button>

        </nav>
      </header>

      <main>

        {/* HOME */}
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
              I’m Muhammad Hammad, a frontend developer focused on
              responsive, functional web applications with clean
              interfaces and practical user experiences.
            </p>

            <div className="actions">

              <button
                className="primary"
                onClick={() => go("projects")}
                type="button"
              >
                Explore my work ↗
              </button>

              <button
                className="secondary"
                onClick={() => go("contact")}
                type="button"
              >
                Let's talk
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

          {/* CODE CARD */}
          <div className="code">

            <div className="dots">

              <i />
              <i />
              <i />

              <small>developer.profile</small>

            </div>

            <pre>
              <span>const</span> developer = {"{"}
              {"\n  "}name: <b>"Muhammad Hammad"</b>,
              {"\n  "}role: <b>"Frontend Developer"</b>,
              {"\n  "}stack: [
              <b>"React"</b>, <b>"JavaScript"</b>, <b>"CSS"</b>],
              {"\n  "}focus: <b>"Real working products"</b>
              {"\n"}
              {"}"}
            </pre>

            <div className="status">
              ● Open to opportunities
            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section line">

          <label>01 — ABOUT</label>

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
                deployable — not simply a static UI concept.
              </p>

            </div>

          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="section line">

          <div className="heading">

            <div>

              <label>02 — SELECTED WORK</label>

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

                  <div className="visual-overlay">

                    <small>{project.number}</small>

                    <strong>{project.icon}</strong>

                  </div>

                </div>

                {/* PROJECT INFORMATION */}
                <div className="content">

                  <label>
                    {project.category}
                  </label>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="tags">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* FEATURES */}
                  <div className="features">

                    <span>✓ Responsive UI</span>

                    <span>✓ Functional features</span>

                    <span>✓ Deployed</span>

                  </div>

                  {/* LINKS */}
                  <div className="project-actions">

                    <a
                      className="primary small"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Project ↗
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ROADMAP */}
        <section className="section line">

          <label>03 — ROADMAP</label>

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

        {/* SKILLS */}
        <section id="skills" className="section line">

          <label>04 — SKILLS</label>

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

        {/* CONTACT */}
        <section
          id="contact"
          className="section line contact"
        >

          <div>

            <label>05 — CONTACT</label>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p className="copy">
              Let’s build something useful, polished, and genuinely
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

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
              event.currentTarget.reset();
            }}
          >

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
              Send message ↗
            </button>

            {sent && (
              <div className="success">
                Thanks! Please use the email address shown beside
                the form to send your message.
              </div>
            )}

          </form>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <span>
          MH&nbsp; Muhammad Hammad
        </span>

        <span>
          © 2026 Muhammad Hammad · React & CSS
        </span>

        <button
          onClick={() => go("home")}
          type="button"
        >
          Back to top ↑
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