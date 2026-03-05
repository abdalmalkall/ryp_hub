import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";

const Index = () => {
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
