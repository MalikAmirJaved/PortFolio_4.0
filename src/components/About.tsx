const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Golang", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"] },
  { category: "Real-time", items: ["WebSocket", "WebRTC", "Socket.io"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <p className="section-heading">About Me</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
          A passionate builder of <span className="gradient-text">web solutions</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer who thrives on turning complex business requirements into 
              elegant, scalable software. My journey began with a 5-month internship where I laid 
              the foundation, followed by 10 months of hands-on development building enterprise 
              SaaS applications.
            </p>
            <p>
              I specialize in the <span className="text-foreground">MERN stack</span>, with a growing 
              expertise in <span className="text-foreground">Golang</span> for high-performance services. 
              I'm particularly drawn to real-time applications, having worked extensively with 
              <span className="text-foreground"> WebSocket</span> and <span className="text-foreground">WebRTC</span> 
              for live streaming and instant communication features.
            </p>
            <p>
              What sets me apart is my experience building complete SaaS products from the ground up—ERP 
              systems, POS solutions, and employee monitoring tools that handle real users and real data.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="card-elevated p-6 space-y-4">
              <h3 className="font-mono text-primary text-sm uppercase tracking-wider mb-4">
                Technical Arsenal
              </h3>
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {skillGroup.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="tech-tag">
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
};

export default About;
