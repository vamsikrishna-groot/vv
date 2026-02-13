import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          MBA — Marketing & Data Science
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Vamsi Krishna{" "}
          <span className="text-gradient-gold">Reddy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-secondary-foreground font-body text-lg leading-relaxed mb-10"
        >
          MBA in Marketing & Data Science — turning consumer insights into
          high-impact digital campaigns. I blend analytics with creativity to
          help brands grow smarter and connect deeper.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium text-sm px-7 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary font-body font-medium text-sm px-7 py-3 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <a href="mailto:vamsikrishna1911@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> <span className="text-sm font-body">Email</span>
            </a>
            <a href="tel:+918919978396" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> <span className="text-sm font-body">+91-8919978396</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin size={16} /> <span className="text-sm font-body">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
