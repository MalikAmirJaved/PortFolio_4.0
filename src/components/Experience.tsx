import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Full-time Role",
    period: "10 months",
    type: "Employment",
    description: [
      "Architected and developed multiple SaaS products including ERP and POS systems serving active users",
      "Implemented real-time features using WebSocket for live data synchronization across distributed systems",
      "Built employee monitoring solution with WebRTC for live screen streaming and automated screenshot capture",
      "Designed scalable database schemas and RESTful APIs handling complex business logic",
    ],
    tech: ["React", "Node.js", "MongoDB", "WebSocket", "WebRTC", "Golang"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Internship",
    period: "5 months",
    type: "Internship",
    description: [
      "Developed foundational features for enterprise applications using MERN stack",
      "Collaborated with senior developers to implement UI components and API integrations",
      "Gained hands-on experience with agile development practices and code review processes",
      "Built reusable React components and established coding patterns for the team",
    ],
    tech: ["React", "Express", "MongoDB", "Node.js", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <p className="section-heading">Experience</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
          Where I've <span className="gradient-text">worked</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-card border border-border 
                              flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                <div className="card-elevated p-6 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="status-badge status-active">{exp.type}</span>
                      <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience summary */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="text-center p-6 card-elevated">
            <p className="text-3xl font-bold gradient-text">1.3+</p>
            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
          </div>
          <div className="text-center p-6 card-elevated">
            <p className="text-3xl font-bold gradient-text">5+</p>
            <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
          </div>
          <div className="text-center p-6 card-elevated">
            <p className="text-3xl font-bold gradient-text">4</p>
            <p className="text-sm text-muted-foreground mt-1">SaaS Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
