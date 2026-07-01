import profile from "../assets/mypict.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="tag">DevOps Engineer</span>

        <h1 className="hero-title">
          Hi, I'm <span>Ammar Khan</span>
        </h1>

        <p className="hero-description">
          Passionate DevOps Engineer specializing in AWS, Docker,
          Kubernetes, Terraform, CI/CD, Monitoring, GitHub Actions,
          Linux and Cloud Infrastructure.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="/Ammar-Khan-CV.pdf"
            download="Ammar-Khan-CV.pdf"
            className="btn-secondary"
          >
            Download CV
          </a>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h3>4+</h3>
            <p>DevOps Projects</p>
          </div>

          <div className="stat-card">
            <h3>2</h3>
            <p>Internships</p>
          </div>

          <div className="stat-card">
            <h3>AWS</h3>
            <p>Cloud Platform</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Ammar Khan" />
      </div>
    </section>
  );
}

export default Hero;