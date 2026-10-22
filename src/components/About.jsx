
import "./About.css";

function About() {
  const highlights = [
    {
      number: "Backend",
      title: "Python Development",
      description: "Building Django applications and REST APIs.",
    },
    {
      number: "Full Stack",
      title: "Web Application Development",
      description: "Connecting frontend interfaces with backend services.",
    },
    {
      number: "Mentoring",
      title: "Technical Knowledge Sharing",
      description: "Guiding interns through programming concepts and practical tasks.",
    },
  ];

  const skillGroups = [
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "JWT Authentication",
        "Role-Based Access",
      ],
    },
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React Hooks",
        "React Router",
        "Axios",
        "Formik & Yup",
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MySQL",
        "Django ORM",
        "Database Design",
        "Query Optimization",
        "select_related",
        "prefetch_related",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "API Testing",
        "Agile Development",
      ],
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section heading */}
        <div className="section-heading">
          <p className="section-eyebrow">GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">
            A developer focused on building useful, reliable, and maintainable
            web applications.
          </p>
        </div>

        {/* About content */}
        <div className="about-content">
          <div className="about-text">
            <h3>
              Passionate about <span>building solutions</span> with code.
            </h3>

            <p>
              I'm Keerthi M, a Python Full Stack Developer based in
              Coimbatore, Tamil Nadu. I work with Python, Django,
              Django REST Framework, and MySQL to develop backend
              functionality and reliable REST APIs.
            </p>

            <p>
              I also work with React.js and modern JavaScript to create
              responsive interfaces and integrate frontend components
              with backend services. My development experience includes
              authentication, database relationships, application workflows,
              and data validation.
            </p>

            <p>
              Alongside software development, I mentor interns and help
              learners strengthen their programming fundamentals through
              practical exercises and application development.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <span className="highlight-number">{item.number}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#projects" className="about-link">
              Explore My Projects <span>↗</span>
            </a>
          </div>

          {/* Technical skills */}
          <div id="skills" className="skills-content">
            <div className="skills-heading">
              <p className="section-eyebrow">MY TOOLKIT</p>
              <h3>Technical Skills</h3>
              <p>
                Technologies and tools I use to build web applications.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.title}>
                  <div className="skill-card-heading">
                    <span className="skill-icon">{group.icon}</span>
                    <h4>{group.title}</h4>
                  </div>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
