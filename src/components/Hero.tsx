import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMmQ0ZWUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTItMnYyem0yIDB2MnptMiAwdjJ6bTIgMHYyem0yIDB2MnptMiAwdjJ6bTIgMHYyem0yIDB2MnptMiAwdjJ6bTIgMHYyem0yIDB2MnptMiAwdjJ6bTIgMHYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Avatar with glow effect */}
          <div className="mb-8 inline-block relative">
            <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full animate-glow" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/50 mx-auto">
              <img 
                src="https://github.com/theavelino.png" 
                alt="Matheus Avelino"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            <span className="gradient-text">Matheus Avelino</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-heading">
            Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Desenvolvedor Full Stack apaixonado por criar experiências web excepcionais. 
            Especializado em JavaScript, React e tecnologias modernas. Transformando ideias em código desde 2022.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <Button variant="outline" size="lg" className="gap-2 card-hover" asChild>
              <a href="https://github.com/theavelino" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 card-hover" asChild>
              <a href="https://linkedin.com/in/theavelino" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" className="gap-2 card-hover" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contato
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <a href="#about" className="inline-block animate-float">
            <ArrowDown className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
