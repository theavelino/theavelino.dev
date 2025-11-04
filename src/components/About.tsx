import { Code2, Laptop, Sparkles } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2022",
      icon: Sparkles,
      title: "Início da Jornada",
      description: "Comecei a programar em Python para aprender lógica de programação",
    },
    {
      year: "2023",
      icon: Code2,
      title: "Descoberta do Web",
      description: "Descobri HTML e me interessei por desenvolvimento web, mergulhando em JavaScript",
    },
    {
      year: "2024",
      icon: Laptop,
      title: "Desenvolvedor Full Stack",
      description: "Trabalho diariamente com JavaScript, React e tecnologias modernas",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center animate-fade-in">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 card-hover mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Olá! Sou Matheus, um desenvolvedor de software apaixonado por tecnologia e inovação. 
              Minha jornada no desenvolvimento começou com Python, onde aprendi os fundamentos da programação 
              e lógica computacional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cerca de um ano depois, descobri o mundo do desenvolvimento web através do HTML, e isso mudou tudo. 
              Mergulhei profundamente em JavaScript, e hoje é a linguagem que uso quase todos os dias. 
              Adoro criar interfaces intuitivas e experiências de usuário memoráveis, sempre buscando 
              as melhores práticas e tecnologias mais modernas.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-sm font-mono text-primary font-semibold">{milestone.year}</span>
                      <h3 className="text-xl font-heading font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
