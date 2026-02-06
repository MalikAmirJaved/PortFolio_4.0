import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          Designed & Built by <span className="text-primary">Amir Javed</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amirjavedmalik2002@gmail.com&su=Hello&body=Hi Amir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/MalikAmirJaved"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/amir-javed-a9274b281"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
