function Projects() {
  const projects = [
    {
      title: "Terraform S3 Website",
      desc: "Created AWS S3 bucket using Terraform and deployed a static website."
    },
    {
      title: "Two-Tier Application",
      desc: "Dockerized Flask and MySQL application with Jenkins CI/CD pipeline."
    },
    {
      title: "GitHub Actions CI/CD",
      desc: "Node.js application deployed on AWS EC2 using GitHub Actions."
    },
    {
      title: "Three-Tier Kubernetes App",
      desc: "EKS cluster with frontend, backend, database and ALB Ingress."
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <button className="project-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;