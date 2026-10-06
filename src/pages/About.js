const skills = [
  "C",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

function About() {
  return (
    <div className="page">
      <section className="content-section">
        <p className="eyebrow">ABOUT ME</p>
        <h1>A little about me</h1>

        <div className="about-card">
          <p>
            I'm an aspiring software developer who enjoys coding and
            experimenting with technology. I like learning how things work,
            building small projects, and improving my skills by actually
            creating things.
          </p>
          <p>
            I'm currently exploring programming and web development, with an
            interest in growing into a well-rounded software developer.
          </p>
        </div>

        <div className="skills-section">
          <p className="eyebrow">TECHNOLOGIES</p>
          <h2>Skills</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;