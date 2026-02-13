const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()} Kasireddy Vamsi Krishna Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
