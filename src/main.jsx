import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  [
    "01",
    "Medicare Healthcare",
    "Business Website",
    ["HTML", "CSS", "JavaScript"],
    "Healthcare website with services, doctors, appointment booking, contact pages, and responsive layouts.",
    "https://hammad1-cyber.github.io/project-1-medical-website/",
    "https://github.com/hammad1-cyber/project-1-medical-website",
    "âœ“",
    "/Muhammad-Hammad-Project-5-Portfolio/projects/project-1-medical.JPG",
  ],
  [
    "02",
    "EduTrack",
    "Student Management Dashboard",
    ["React", "CSS", "Mock API"],
    "Functional academic dashboard for students, courses, attendance, results, search, and filtering.",
    "https://hammad1-cyber.github.io/project-2-student-management/",
    "https://github.com/hammad1-cyber/project-2-student-management",
    "â—†",
    "/Muhammad-Hammad-Project-5-Portfolio/projects/project-2-student.JPG",
  ],
  [
    "03",
    "Product Explorer",
    "API E-commerce",
    ["React", "JavaScript", "REST API"],
    "API-powered product explorer with categories, sorting, product details, favorites, and cart calculations.",
    "https://hammad1-cyber.github.io/project-3-api-product-explorer/",
    "https://github.com/hammad1-cyber/project-3-api-product-explorer",
    "â—‡",
    "/Muhammad-Hammad-Project-5-Portfolio/projects/project-3-products.JPG",
  ],
  [
    "04",
    "Isobar Weather",
    "Weather Application",
    ["React", "JavaScript", "Weather API"],
    "Real weather experience with current conditions, hourly and daily forecasts, searches, and error/loading states.",
    "https://hammad1-cyber.github.io/project-4-weather-app/",
    "https://github.com/hammad1-cyber/project-4-weather-app",
    "â˜¼",
    "/Muhammad-Hammad-Project-5-Portfolio/projects/project-4-weather.JPG",
  ],
];

const skills = [
  ["React", "Reusable components & frontend architecture"],
  ["JavaScript", "Interactive functionality & API integration"],
  ["HTML / CSS", "Semantic markup, layouts & responsive UI"],
  ["REST APIs", "Data fetching, loading & error handling"],
  ["Git / GitHub", "Version control & deployment"],
  ["Responsive Design", "Interfaces across devices"],
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
    });
    setMenu(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>
          <b>MH</b>
          <span>Muhammad Hammad</span>
        </button>

        <button className="menu" onClick={() => setMenu(!menu)}>
          {menu ? "Ã—" : "â˜°"}
        </button>

        <nav className={menu ? "links open" : "links"}>
          {["home", "about", "projects", "skills", "contact"].map((x) => (
            <button key={x} onClick={() => go(x)}>
              {x}
            </button>
          ))}

          <button onClick={() => setDark(!dark)}>
            {dark ? "â˜€" : "â˜¾"}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div>
            <div className="eyebrow">
              <i />
              AVAILABLE FOR FRONTEND PROJECTS
            </div>

            <h1>
              Building digital experiences that <em>feel real.</em>
            </h1>

            <p className="lead">
              Iâ€™m Muhammad Hammad, a frontend developer focused on responsive,
              functional web applications with clean interfaces and practical
              user experiences.
            </p>

            <div className="actions">
              <button className="primary" onClick={() => go("projects")}>
                Explore my work â†—
              </button>

              <button className="secondary" onClick={() => go("contact")}>
                Let's talk
              </button>
            </div>

            <div className="meta">
              <span>
                <b>04</b> completed projects
              </span>

              <span>
                <b>100%</b> deployed & testable
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
              {"\n"} name: <b>"Muhammad Hammad"</b>,
              {"\n"} role: <b>"Frontend Developer"</b>,
              {"\n"} stack: [<b>"React"</b>, <b>"JavaScript"</b>, <b>"CSS"</b>],
              {"\n"} focus: <b>"Real working products"</b>
              {"\n"}{"}"}
            </pre>

            <div className="status">â— Open to opportunities</div>
          </div>
        </section>

        <section id="about" className="section line">
          <label>01 â€” ABOUT</label>

          <div className="two">
            <h2>
              Not just interfaces.
              <br />
              <span>Working products.</span>
            </h2>

            <div className="copy">
              <p>
                My project roadmap progresses from core web development to
                React dashboards, API-powered applications, and real-time data
                experiences.
              </p>

              <p>
                Every project is designed to be usable, responsive, and
                deployable â€” not simply a static UI concept.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section line">
          <div className="heading">
            <div>
              <label>02 â€” SELECTED WORK</label>

              <h2>
                Projects that <span>actually work.</span>
              </h2>
            </div>

            <p>
              Four deployed projects. Four different challenges. One
              continuous learning path.
            </p>
          </div>

          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p[0]}>
                <div className="visual">
                  <img
                    src={p[8]}
                    alt={`${p[1]} project screenshot`}
                  />

                  <div className="visual-overlay">
                    <small>{p[0]}</small>
                    <strong>{p[7]}</strong>
                  </div>
                </div>

                <div className="content">
                  <label>{p[2]}</label>

                  <h3>{p[1]}</h3>

                  <p>{p[4]}</p>

                  <div className="tags">
                    {p[3].map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>

                  <div className="features">
                    <span>âœ“ Responsive UI</span>
                    <span>âœ“ Functional features</span>
                    <span>âœ“ Deployed</span>
                  </div>

                  <div className="project-actions">
                    <a
                      className="primary small"
                      href={p[5]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Project â†—
                    </a>

                    <a
                      href={p[6]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub â†—
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section line">
          <label>03 â€” ROADMAP</label>

          <div className="roadmap">
            {projects.map((p, i) => (
              <div key={p[0]}>
                <b>{p[0]}</b>
                <small>PROJECT {p[0]}</small>

                <h3>{p[1]}</h3>

                <p>
                  {
                    [
                      "Core HTML, CSS & JavaScript foundation",
                      "React dashboard architecture & state",
                      "React + REST API product experience",
                      "React + live weather API experience",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section line">
          <label>04 â€” SKILLS</label>

          <div className="skills">
            {skills.map((s, i) => (
              <div key={s[0]}>
                <small>0{i + 1}</small>

                <div>
                  <h3>{s[0]}</h3>
                  <p>{s[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section line contact">
          <div>
            <label>05 â€” CONTACT</label>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p className="copy">
              Letâ€™s build something useful, polished, and genuinely functional.
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
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              e.currentTarget.reset();
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

            <button className="primary" type="submit">
              Send message â†—
            </button>

            {sent && (
              <div className="success">
                Thanks! Please use the email address shown beside the form to
                send your message.
              </div>
            )}
          </form>
        </section>
      </main>

      <footer>
        <span>MH&nbsp; Muhammad Hammad</span>

        <span>Â© 2026 Muhammad Hammad Â· React & CSS</span>

        <button onClick={() => go("home")}>
          Back to top â†‘
        </button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

