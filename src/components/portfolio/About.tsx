import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
  "AWS", "Docker", "Tailwind CSS", "Next.js", "GraphQL"
];

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with modern best practices"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces that users love to interact with"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and seamless user experience"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with 5+ years of experience building 
              web applications that solve real-world problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                My journey in tech started with curiosity about how websites work. 
                Today, I specialize in creating full-stack applications that are both 
                beautiful and performant.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies I work with</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover-lift cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="portfolio-gradient p-3 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;