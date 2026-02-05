import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 relative">
      {/* Background gradient effect */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl relative z-10">
        <p className="font-mono text-primary mb-4 animate-fade-up">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up-delay-1">
          Amir Javed.
        </h1>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-muted-foreground mb-8 animate-fade-up-delay-2">
          I build things for the web.
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl mb-8 animate-fade-up-delay-3 leading-relaxed">
          Full-stack developer with{" "}
          <span className="text-foreground font-medium">1+ years</span> of
          experience specializing in building scalable SaaS applications. I
          craft enterprise-grade solutions using
          <span className="text-primary"> MERN</span>,{" "}
          <span className="text-primary">Golang</span>, and
          <span className="text-primary"> real-time technologies</span>.
        </p>

        <div className="flex flex-wrap items-center gap-6 animate-fade-up-delay-4">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                       rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amirjavedmalik2002@gmail.com&su=Hello&body=Hi Amir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/MalikAmirJaved"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/amir-javed-a9274b281"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
