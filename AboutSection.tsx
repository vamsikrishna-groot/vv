import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          About <span className="text-gradient-gold">Me</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center text-secondary-foreground font-body leading-relaxed mb-16"
        >
          Results-oriented MBA candidate specializing in Marketing and Data Science, with proven experience
          in driving growth through data-informed strategies. Demonstrated ability in market analysis,
          digital marketing campaigns, and CRM management to improve lead conversion and boost user engagement.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Woxsen University",
              subtitle: "MBA — Marketing & Data Science",
              period: "2023 – 2025",
              location: "Hyderabad, Telangana",
            },
            {
              icon: BookOpen,
              title: "Vidhyaashram First Grade College",
              subtitle: "Bachelor of Business Administration — CGPA: 7.37",
              period: "2019 – 2022",
              location: "Mysuru, Karnataka",
            },
          ].map((edu, i) => (
            <motion.div
              key={edu.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 2}
              variants={fadeUp}
              className="bg-secondary rounded-lg p-8 border border-border hover:border-primary/30 transition-colors shadow-card"
            >
              <edu.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-xl font-semibold mb-1">{edu.title}</h3>
              <p className="text-primary text-sm font-body mb-2">{edu.subtitle}</p>
              <p className="text-muted-foreground text-sm font-body">{edu.period} · {edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
