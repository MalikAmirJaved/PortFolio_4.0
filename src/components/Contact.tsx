import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-heading">Get In Touch</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Let's <span className="gradient-text">connect</span>
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm currently open to new opportunities and interesting projects. Whether you have a 
          question, want to discuss a potential collaboration, or just want to say hi—my inbox 
          is always open. I'll do my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:amirjavedmalik@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                     rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium glow"
          >
            <Mail className="w-4 h-4" />
            Say Hello
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            href="mailto:amirjavedmalik@gmail.com"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono">Email</span>
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
