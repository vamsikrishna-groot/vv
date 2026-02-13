import { motion } from "framer-motion";
import { Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const technicalSkills = [
  "MS Office Suite", "Digital Marketing", "Social Media Management",
  "Web Analytics", "Google Analytics", "Python", "MS Excel", "MS Access",
];

const professionalSkills = [
  "Adaptability", "Creativity", "Communication", "Team Coordination",
  "Analytical Thinking", "Leadership", "Interpersonal Skills",
];

const certifications = [
  "Digital Marketing and E-commerce — Create Value",
  "Introduction to Social Media Marketing",
  "Data Science, AI Expertise & Introduction to Machine Learning",
  "Cloud Marketing and Analytics",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills & <span className="text-gradient-gold">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="bg-card rounded-lg p-8 border border-border shadow-card"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-gradient-gold">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="bg-secondary text-secondary-foreground text-xs font-body px-3 py-1.5 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            className="bg-card rounded-lg p-8 border border-border shadow-card"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-gradient-gold">Professional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {professionalSkills.map((skill) => (
                <span key={skill} className="bg-secondary text-secondary-foreground text-xs font-body px-3 py-1.5 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
            className="bg-card rounded-lg p-8 border border-border shadow-card"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-gradient-gold">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <Award size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-foreground text-xs font-body leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
