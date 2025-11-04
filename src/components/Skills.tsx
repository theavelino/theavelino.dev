import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "JavaScript", "TypeScript", "React", "Next.js",
        "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express", "REST APIs", "Python"
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git", "GitHub", "VS Code", "Figma",
        "npm/yarn", "Vite", "Webpack"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center animate-fade-in">
            <span className="gradient-text">Skills</span> & Tecnologias
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-bold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Sempre aprendendo e explorando novas tecnologias para criar soluções melhores 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
