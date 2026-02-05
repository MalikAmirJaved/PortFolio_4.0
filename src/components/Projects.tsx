import { ExternalLink, Github, Layers, Monitor, ShoppingCart, Calendar, Building2 } from "lucide-react";

type ProjectStatus = "active" | "progress" | "hold" | "minimal";

interface Project {
  title: string;
  type: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  impact: string;
  features: string[];
  tech: string[];
  icon: React.ReactNode;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "ERP System",
    type: "Enterprise SaaS",
    status: "active",
    statusLabel: "Active",
    description:
      "A comprehensive subscription-based ERP platform designed for growing businesses. Enables organizations to manage projects, goals, and employee workflows in a unified interface.",
    impact:
      "Streamlines business operations by centralizing project management and HR functions, reducing administrative overhead by providing real-time visibility across departments.",
    features: [
      "Project hierarchy (Projects → Goals → Tasks → Subtasks)",
      "HR panel with complete employee lifecycle management",
      "Customer portal for external stakeholder visibility",
      "Role-based access control with granular permissions",
      "Subscription billing with Stripe integration",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    icon: <Layers className="w-6 h-6" />,
    highlight: true,
  },
  {
    title: "POS System",
    type: "Retail SaaS",
    status: "active",
    statusLabel: "Active",
    description:
      "A centralized point-of-sale platform built for retail businesses. Handles everything from inventory management to employee payroll in a single, intuitive dashboard.",
    impact:
      "Empowers retail businesses with real-time inventory tracking, automated billing, and comprehensive reporting—eliminating the need for multiple disconnected systems.",
    features: [
      "Product & category management with barcode support",
      "Vendor management with purchase order tracking",
      "Automated billing with receipt generation",
      "Order management with status tracking",
      "Financial reports and analytics dashboard",
      "HR module with salary management",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    icon: <ShoppingCart className="w-6 h-6" />,
    highlight: true,
  },
  {
    title: "ERP Monitoring Tool",
    type: "Employee Monitoring",
    status: "progress",
    statusLabel: "In Progress",
    description:
      "A desktop-based employee monitoring solution with real-time capabilities. Enables managers to track work patterns and view live screens for remote team oversight.",
    impact:
      "Provides transparency for remote work environments through automated activity tracking and live streaming, helping teams maintain productivity and accountability.",
    features: [
      "Desktop app with automatic screenshot capture (1-min intervals)",
      "Live screen streaming for admin viewing via WebRTC",
      "Activity timeline with screenshot gallery",
      "Real-time status indicators for online employees",
      "Secure peer-to-peer connection for streaming",
    ],
    tech: ["React", "Electron", "Golang", "WebRTC", "WebSocket", "MongoDB"],
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: "FoxyPlanner",
    type: "Social Media Tool",
    status: "hold",
    statusLabel: "On Hold",
    description:
      "A social media scheduling platform supporting multiple platforms. Allows users to plan, schedule, and publish content across Facebook, Messenger, and TikTok from a single interface.",
    impact:
      "Saves time for social media managers by consolidating multi-platform posting into one workflow, with scheduling capabilities for optimal posting times.",
    features: [
      "Multi-platform support (Facebook, Messenger, TikTok)",
      "Content calendar with drag-and-drop scheduling",
      "Direct posting through platform APIs",
      "Media library for asset management",
      "Post preview across platforms",
    ],
    tech: ["React", "Node.js", "MongoDB", "OAuth 2.0", "Meta API", "TikTok API"],
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "HMS",
    type: "Hospital Management",
    status: "minimal",
    statusLabel: "Minimal Contribution",
    description:
      "A hospital management system for healthcare facilities. Contributed to specific modules while gaining exposure to healthcare software requirements and compliance considerations.",
    impact:
      "Learned the complexities of healthcare software development including data sensitivity, regulatory requirements, and the importance of reliable uptime.",
    features: ["Contributed to patient record modules", "Exposure to healthcare compliance requirements"],
    tech: ["React", "Node.js", "MongoDB"],
    icon: <Building2 className="w-6 h-6" />,
  },
];

const statusStyles: Record<ProjectStatus, string> = {
  active: "status-active",
  progress: "status-progress",
  hold: "status-hold",
  minimal: "status-minimal",
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="section-heading">Projects</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Things I've <span className="gradient-text">built</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A collection of enterprise-grade applications I've developed. Each project showcases different 
          aspects of full-stack development, from complex state management to real-time communication.
        </p>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-elevated p-6 lg:p-8 hover-lift ${
                project.highlight ? "gradient-border" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Info */}
                <div className="lg:w-2/3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <span className={`status-badge ${statusStyles[project.status]}`}>
                          {project.statusLabel}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{project.type}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4 p-4 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-sm text-foreground font-medium mb-1">Business Impact</p>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right side - Features */}
                <div className="lg:w-1/3 lg:border-l lg:border-border lg:pl-6">
                  <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary flex-shrink-0">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
