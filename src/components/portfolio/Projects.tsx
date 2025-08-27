import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts using OpenWeather API with beautiful data visualizations.",
    image: "/placeholder.svg",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
    image: "/placeholder.svg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills 
              and passion for creating amazing user experiences.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`hover-lift group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Project image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge className="portfolio-gradient text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View more projects */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;