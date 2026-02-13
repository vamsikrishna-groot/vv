import { motion } from "framer-motion";
import { Heart, Users, Trophy } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const activities = [
  { icon: Heart, text: "Participated in a book donation campaign for the \"TRY\" club." },
  { icon: Trophy, text: "Owned and managed a cricket team (SuperLions) in the WPL at Woxsen University." },
  { icon: Users, text: "Active member of the National Service Scheme (NSS) during undergraduate studies." },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Leadership & <span className="text-gradient-gold">Activities</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
              className="bg-secondary rounded-lg p-6 border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <p className="text-secondary-foreground font-body text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
