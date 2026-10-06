function Contact() {
  return (
    <div className="page">
      <section className="content-section contact-section">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact Me</h1>
        <p className="contact-intro">
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out.
        </p>

        <div className="contact-grid">
          <a className="contact-card" href="mailto:dhanyashetty2007@gmail.com">
            <span className="contact-label">EMAIL</span>
            <strong>dhanyashetty2007@gmail.com</strong>
          </a>

          <a
            className="contact-card"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">GITHUB</span>
            <strong>github.com/dhanyashetty2007-arch</strong>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-label">LINKEDIN</span>
            <strong>your-linkedin-name</strong>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;