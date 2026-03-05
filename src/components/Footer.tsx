const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg tracking-wider text-muted-foreground">
          Render Your Plan
        </p>
        <p className="text-sm text-muted-foreground/60 font-body mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
