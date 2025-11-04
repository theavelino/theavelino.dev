const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            Desenvolvido com ❤️ por{" "}
            <span className="gradient-text font-semibold">Matheus Avelino</span>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
