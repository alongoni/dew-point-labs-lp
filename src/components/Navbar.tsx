import logo from "@/assets/dpl-logo-white.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Dew Point Labs" className="h-10" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#track-record" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Track Record</a>
          <a href="#partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Partners</a>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
