const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background py-14">
      <div className="container mx-auto px-8 text-center">
        <p className="font-display text-lg tracking-[0.2em] text-foreground/40 uppercase">
          Render Your Plan
        </p>
        <div className="line-elegant w-10 mx-auto my-4" />
        <p className="text-xs text-muted-foreground/40 font-body tracking-widest">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
