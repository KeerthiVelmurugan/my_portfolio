import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const recipient = "YOUR_EMAIL@example.com";
    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>
            Let's Work <span>Together</span>
          </h2>
          <p>
            Have an opportunity or a project idea? Feel free to connect with
            me. I'd be happy to discuss it.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's connect</h3>
            <p className="contact-intro">
              I'm interested in Python Full Stack Developer opportunities and
              meaningful projects where I can contribute and grow.
            </p>

            <a
              className="contact-info-item"
              href="https://www.linkedin.com/in/keerthi-v-b6848525a/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-info-icon">in</span>
              <span>
                <strong>LinkedIn</strong>
                <small>Connect professionally</small>
              </span>
              <span className="contact-external">↗</span>
            </a>

            <a
              className="contact-info-item"
              href="https://github.com/KeerthiVelmurugan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-info-icon">⌘</span>
              <span>
                <strong>GitHub</strong>
                <small>Explore my personal projects</small>
              </span>
              <span className="contact-external">↗</span>
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">⌖</span>
              <span>
                <strong>Location</strong>
                <small>Coimbatore, Tamil Nadu, India</small>
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send me a message</h3>

            <div className="contact-form-row">
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              Send Message <span>↗</span>
            </button>

            <p className="form-note">
              Your email application will open with the message prepared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;