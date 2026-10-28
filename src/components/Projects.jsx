
import "./Projects.css";

const projects = [
  {
    title: "Intern Task Generation System",
    category: "Full Stack Web Application",
    description:
      "A Django-based application that generates internship tasks based on selected programming languages, concepts, and task counts. Includes intern management, mentor-specific access, email notifications, and aptitude test assignment and result tracking.",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS"],
    icon: "🎯",
    featured: true,
    liveUrl: "https://task-generation-5kez.onrender.com/",
  },
 
  {
    title: "Invoice Generator",
    category: "Mini Project",
    description:
      "Create professional invoices with business and customer details, itemized billing, taxes, discounts, and PDF printing.",
    technologies: ["React", "JavaScript", "CSS"],
    icon: "🧾",
    featured: false,
    liveUrl: "https://ai-website-5iq0.onrender.com/",
  },
  {
    title: "Expense Tracker",
    category: "Mini Project",
    description:
      "Track daily expenses, categorize spending, and view total expenses to better understand personal spending habits.",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    icon: "💰",
    liveUrl: "https://ai-website-5iq0.onrender.com/expense",
  },
  {
    title: "To-Do App",
    category: "Mini Project",
    description:
      "Manage daily tasks with features to add, edit, complete, and delete tasks, keeping everyday activities organized.",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    icon: "✅",
    liveUrl: "https://ai-website-5iq0.onrender.com/To-do",
  },
  {
    title: "Weather App",
    category: "Mini Project",
    description:
      "A weather application that displays current weather information for a searched city using a weather API.",
    technologies: ["React", "JavaScript", "REST API", "CSS"],
    icon: "🌦️",
    liveUrl: "https://ai-website-5iq0.onrender.com/weather",
  }
   
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-label">MY WORK</span>
          <h2>
            Personal <span>Projects</span>
          </h2>
          <p>
            A collection of personal applications and projects that showcase
            my development skills and practical learning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
            >
              <div className="project-card-top">
                <div className="project-icon">{project.icon}</div>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech-stack">
                {project.technologies.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-status">
                  <span className="status-dot" />
                  Personal Project
                </span>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-link"
                  aria-label={`Open ${project.title} live demo`}
                >
                  Live Demo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
