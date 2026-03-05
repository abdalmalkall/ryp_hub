import { Instagram, MessageCircle, Mail, Youtube, Linkedin } from "lucide-react";
import type { CSSProperties } from "react";

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
    icon: <img src="/logowh.webp" alt="Website logo" className="h-20 w-20 object-contain" />,
    href: "https://render-your-plan.netlify.app/",
    description: "Visit our portfolio",
  },
];

const ContactHub = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-background" data-reveal>
      <div className="container mx-auto px-8">
        <div className="text-center mb-20" data-reveal style={{ "--reveal-delay": "80ms" } as CSSProperties}>
          <p className="text-xs font-body text-muted-foreground tracking-[0.14em] uppercase mb-6">
            Communication
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.05em] text-foreground uppercase">
            Connect With Us
          </h2>
          <div className="line-elegant w-20 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contacts.map((contact, i) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="social-action group block p-10 text-center active:scale-[0.98] rounded-lg border border-border bg-card/70 hover:bg-card hover:border-foreground/30 hover:-translate-y-2 hover:shadow-[0_24px_50px_-24px_hsl(var(--foreground)/0.45)]"
              style={{ "--reveal-delay": `${180 + i * 90}ms` } as CSSProperties}
            >
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-6 ${
                    contact.title === "Website" ? "w-16 h-16" : "w-12 h-12"
                  }`}
                >
                  {contact.icon}
                </div>
                <h3 className="font-display text-xl font-normal text-foreground mb-2 tracking-[0.04em] uppercase group-hover:text-primary transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body tracking-normal">
                  {contact.description}
                </p>
                <div className="line-elegant w-0 group-hover:w-12 mx-auto mt-6 transition-all duration-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHub;
