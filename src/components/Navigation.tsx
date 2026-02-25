import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
        >
          {"<AJ />"}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                <span className="font-mono text-primary text-xs mr-1">0{index + 1}.</span>
                {item.label}
              </button>
            </li>
          ))}
          <li>
  <button
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/resumecv.pdf"; // path in public folder
      link.download = "resumecv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="px-4 py-2 border border-primary text-primary text-sm rounded 
               hover:bg-primary/10 transition-all duration-300"
  >
    Resume1
  </button>
</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-lg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-xl text-foreground hover:text-primary transition-colors"
              >
                <span className="font-mono text-primary text-sm block mb-1">0{index + 1}.</span>
                {item.label}
              </button>
            </li>
          ))}
          <a
  href={`${import.meta.env.BASE_URL}resumecv.pdf`}
  download
  className="px-4 py-2 border border-primary text-primary text-sm rounded 
             hover:bg-primary/10 transition-all duration-300"
>
  Resume1
</a>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
