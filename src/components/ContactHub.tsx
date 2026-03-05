import { Instagram, MessageCircle, Mail, Youtube, Linkedin, Globe } from "lucide-react";
import type { MouseEvent } from "react";

interface ContactCard {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
}

const contacts: ContactCard[] = [
  {
    title: "Instagram",
    icon: <Instagram size={24} strokeWidth={1.5} />,
    href: "https://www.instagram.com/render_your_plan/profilecard/",
    description: "Follow our design journey",
  },
  {
    title: "WhatsApp",
    icon: <MessageCircle size={24} strokeWidth={1.5} />,
    href: "https://wa.me/962790383135",
    description: "Chat with us directly",
  },
  {
    title: "Email",
    icon: <Mail size={24} strokeWidth={1.5} />,
    href: "mailto:renderyourplan@gmail.com",
    description: "Send us a message",
  },
  {
    title: "YouTube",
    icon: <Youtube size={24} strokeWidth={1.5} />,
    href: "https://youtube.com/@renderyourplan",
    description: "Watch our projects",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin size={24} strokeWidth={1.5} />,
    href: "https://www.linkedin.com/in/ibrahem-alyan-a885a7387",
    description: "Connect professionally",
  },
  {
    title: "Website",
    icon: <Globe size={24} strokeWidth={1.5} />,
    href: "https://render-your-plan.netlify.app/",
    description: "Visit our portfolio",
  },
];

const ContactHub = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-body text-muted-foreground tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Communication
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-foreground opacity-0 animate-fade-up uppercase" style={{ animationDelay: "0.2s" }}>
            Connect With Us
          </h2>
          <div className="line-elegant w-20 mx-auto mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contacts.map((contact, i) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-luxury group block p-10 text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-500 mb-6">
                  {contact.icon}
                </div>
                <h3 className="font-display text-xl font-normal text-foreground mb-2 tracking-[0.1em] uppercase">
                  {contact.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body tracking-wider">
                  {contact.description}
                </p>
                <div className="line-elegant w-0 group-hover:w-12 mx-auto mt-6 transition-all duration-700" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHub;
