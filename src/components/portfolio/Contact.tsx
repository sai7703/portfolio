import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex@example.com",
    href: "mailto:alex@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project collaboration" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    rows={5}
                  />
                </div>

                <Button className="w-full portfolio-gradient text-primary-foreground hover:opacity-90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="portfolio-gradient p-3 rounded-lg">
                          <info.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Availability status */}
              <Card className="portfolio-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-medium">Currently Available</p>
                      <p className="text-sm text-muted-foreground">
                        Ready for new projects and collaborations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;