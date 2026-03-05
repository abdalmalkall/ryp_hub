import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern interior design"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="line-elegant w-32 mx-auto mb-12" />
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-[0.06em] text-shimmer leading-tight opacity-0 animate-fade-up uppercase"
          style={{ animationDelay: "0.5s" }}
        >
          Render Your Plan
        </h1>

        <p
          className="mt-8 text-sm md:text-base font-body text-muted-foreground font-light leading-relaxed opacity-0 animate-fade-up max-w-lg mx-auto tracking-normal"
          style={{ animationDelay: "0.8s" }}
        >
          Architectural Visualization & Interior Design — Transforming spaces into extraordinary experiences
        </p>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1.1s" }}>
          <a
            href="#contact"
            className="inline-block mt-12 px-10 py-3.5 border border-foreground/20 text-foreground font-body text-xs tracking-[0.12em] uppercase hover:bg-foreground hover:text-background hover:shadow-xl active:scale-95 transition-all duration-500"
          >
            Get in Touch
          </a>
        </div>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1.3s" }}>
          <div className="line-elegant w-32 mx-auto mt-16" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
