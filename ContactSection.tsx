import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Get in <span className="text-gradient-gold">Touch</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-muted-foreground font-body mb-12 max-w-lg mx-auto"
        >
          I'm actively seeking opportunities in Marketing and Data-driven Strategy roles. Let's connect!
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Mail, label: "Email", value: "vamsikrishna1911@gmail.com", href: "mailto:vamsikrishna1911@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91-8919978396", href: "tel:+918919978396" },
            { icon: Linkedin, label: "LinkedIn", value: "Connect", href: "https://linkedin.com" },
            { icon: MapPin, label: "Location", value: "Tirupati, India" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href || "#contact"}
              target={item.href?.startsWith("http") ? "_blank" : undefined}
              rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors group block"
            >
              <item.icon size={20} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground font-body mb-1">{item.label}</p>
              <p className="text-sm text-foreground font-body font-medium">{item.value}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
