import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    targets.forEach((element, index) => {
      if (!element.style.getPropertyValue("--reveal-delay")) {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 320)}ms`);
      }
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ContactHub />
      <Footer />
    </div>
  );
};

export default Index;
