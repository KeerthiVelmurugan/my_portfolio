import "./Experience.css";

const experience = [
  {
    role: "Python Full Stack Developer",
    company: "GT Software College",
    location: "Coimbatore, Tamil Nadu",
    duration: "Dec 2023 – Present",
    description:
      "Develop and maintain web applications, build backend functionality using Python and Django, and work with frontend technologies to deliver reliable application features.",
    responsibilities: [
      "Develop backend features, REST APIs, and database-driven functionality.",
      "Work with Python, Django, Django REST Framework, and MySQL.",
      "Contribute to frontend development using React.js, JavaScript, HTML, and CSS where applicable.",
      "Guide interns and support developers through technical mentoring and code reviews.",
      "Collaborate with the team to troubleshoot issues and improve application functionality.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Anna University – BIT Campus, Tiruchirappalli",
    score: "CGPA: 7.5 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "M.A.M Higher Secondary School, Mettur",
    score: "Percentage: 90.6%",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">MY JOURNEY</span>
          <h2>
            Experience & <span>Education</span>
          </h2>
          <p>
            My professional journey, technical contributions, and academic
            background.
          </p>
        </div>

        <div className="journey-grid">
          <div className="journey-column">
            <h3 className="journey-title">
              <span className="journey-icon">💼</span>
              Professional Experience
            </h3>

            {experience.map((item, index) => (
              <article className="journey-card" key={index}>
                <div className="timeline-dot" />

                <span className="journey-duration">{item.duration}</span>
                <h4>{item.role}</h4>
                <h5>{item.company}</h5>
                <p className="journey-location">{item.location}</p>
                <p className="journey-description">{item.description}</p>

                <ul className="responsibility-list">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="journey-column education-column">
            <h3 className="journey-title">
              <span className="journey-icon">🎓</span>
              Education
            </h3>

            {education.map((item, index) => (
              <article className="journey-card education-card" key={index}>
                <div className="timeline-dot" />

                <h4>{item.degree}</h4>
                <h5>{item.institution}</h5>
                <div className="education-score">{item.score}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;