import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "GymPass",
      description: "API completa de gerenciamento de academias com sistema de check-ins e validação de distância geográfica",
      tags: ["Node.js", "TypeScript", "TDD", "SOLID", "Testing"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      github: "https://github.com/theavelino/gympass",
      demo: "https://github.com/theavelino/gympass",
    },
    {
      title: "Shoes Store",
      description: "E-commerce moderno de calçados com interface intuitiva e experiência de compra otimizada",
      tags: ["TypeScript", "React", "E-commerce", "Frontend"],
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=400&fit=crop",
      github: "https://github.com/theavelino/shoes_store",
      demo: "https://github.com/theavelino/shoes_store",
    },
    {
      title: "GraphQL NestJS API",
      description: "API GraphQL robusta construída com NestJS, demonstrando arquitetura moderna e escalável",
      tags: ["NestJS", "GraphQL", "TypeScript", "API"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      github: "https://github.com/theavelino/graphql-nest-api",
      demo: "https://github.com/theavelino/graphql-nest-api",
    },
    {
      title: "Nearby",
      description: "Aplicativo mobile para descobrir estabelecimentos próximos com cupons de desconto",
      tags: ["Kotlin", "Mobile", "Android", "Geolocation"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      github: "https://github.com/theavelino/Nearby",
      demo: "https://github.com/theavelino/Nearby",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center animate-fade-in">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden card-hover border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
