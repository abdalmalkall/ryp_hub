import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between h-20 px-8">

        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-[0.08em] text-foreground uppercase hover:text-primary"
        >
          Render Your Plan
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Home", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : "#contact"}
              className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-500 tracking-[0.12em] uppercase hover:scale-[1.03] active:scale-95"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground hover:text-primary active:scale-95"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/60">
          <div className="flex flex-col items-center gap-8 py-10">
            {["Home", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : "#contact"}
                onClick={() => setOpen(false)}
                className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-500 tracking-[0.12em] uppercase hover:scale-[1.03] active:scale-95"
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
