function Certifications() {
  const certs = [
    "AWS Cloud Practitioner",
    "Microsoft Azure Fundamentals (AZ-900)",
    "Kubernetes for Beginners",
    "Shell Script for Beginners",
    "Cloud Native Computing (PIAIC)",
    "AWS Certification Badge"
  ];

  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>

      <div className="card-grid">
        {certs.map((cert, index) => (
          <div className="card" key={index}>
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;