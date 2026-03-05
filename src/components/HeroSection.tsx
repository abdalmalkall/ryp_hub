import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Modern interior design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="line-accent w-24 mx-auto mb-8" />
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Render Your Plan
        </h1>

        <p
          className="mt-6 text-lg md:text-xl font-body text-muted-foreground font-light leading-relaxed opacity-0 animate-fade-up max-w-xl mx-auto"
          style={{ animationDelay: "0.7s" }}
        >
          Architectural Visualization & Interior Design — Transforming spaces into extraordinary experiences
        </p>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
          <a
            href="#contact"
            className="inline-block mt-10 px-8 py-3 border border-primary/40 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-sm"
          >
            Get in Touch
          </a>
        </div>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
          <div className="line-accent w-24 mx-auto mt-12" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
