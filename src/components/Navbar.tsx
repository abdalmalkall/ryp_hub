import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-display text-2xl font-semibold tracking-wider text-foreground">
          Render Your Plan
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : "#contact"}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-8">
            {["Home", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : "#contact"}
                onClick={() => setOpen(false)}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
