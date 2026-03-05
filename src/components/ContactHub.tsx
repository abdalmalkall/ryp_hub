import { Instagram, MessageCircle, Mail, Youtube, Linkedin } from "lucide-react";
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
    icon: <Instagram size={28} />,
    href: "https://www.instagram.com/render_your_plan/profilecard/",
    description: "Follow our design journey",
  },
  {
    title: "WhatsApp",
    icon: <MessageCircle size={28} />,
    href: "https://wa.me/962790383135",
    description: "Chat with us directly",
  },
  {
    title: "Email",
    icon: <Mail size={28} />,
    href: "mailto:renderyourplan@gmail.com",
    description: "Send us a message",
  },
  {
    title: "YouTube",
    icon: <Youtube size={28} />,
    href: "https://youtube.com/@renderyourplan",
    description: "Watch our projects",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin size={28} />,
    href: "https://www.linkedin.com/in/ibrahem-alyan-a885a7387",
    description: "Connect professionally",
  },
];

const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const ContactHub = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wider text-foreground">
            Connect With Us
          </h2>
          <div className="line-accent w-16 mx-auto mt-6 mb-4" />
          <p className="text-muted-foreground font-body text-lg font-light">
            Choose your preferred way to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, i) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className="card-glow group block bg-card border border-border rounded-lg p-8 text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2 tracking-wide">
                  {contact.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {contact.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHub;
