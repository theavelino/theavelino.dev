import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/theavelino",
      color: "hover:text-primary",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/theavelino",
      color: "hover:text-primary",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/theavelino",
      color: "hover:text-primary",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@theavelino.dev",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes. 
            Entre em contato através das minhas redes sociais ou envie um email!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`gap-2 card-hover animate-fade-in ${link.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                    {link.name}
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 card-hover">
            <p className="text-muted-foreground mb-4">
              Ou me envie um email diretamente:
            </p>
            <a 
              href="mailto:contact@theavelino.dev"
              className="text-2xl font-heading font-bold gradient-text hover:underline"
            >
              contact@theavelino.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
