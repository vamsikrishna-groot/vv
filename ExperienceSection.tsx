import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, BarChart3, MessageSquare, Target, ShoppingCart, Search } from "lucide-react";
import asrSeedsImg from "@/assets/asr-seeds-project.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const achievements = [
  { icon: Search, text: "Analyzed 5 key market segments and 20+ competitor products in the chilli seed industry, identifying 3 emerging trends that shaped the go-to-market strategy." },
  { icon: TrendingUp, text: "Improved marketing message resonance by 15% through competitive analysis of 10+ competitors, refining positioning for regional farmers." },
  { icon: Users, text: "Generated and managed 150+ leads pipeline using CRM tools, scheduling 30+ client appointments and increasing lead conversion rates by 10%." },
  { icon: ShoppingCart, text: "Achieved ₹75,000 in direct sales revenue through data-driven outreach strategies and relationship management with 20+ key clients." },
  { icon: MessageSquare, text: "Contributed to 3 major digital campaigns, achieving 12% increase in user engagement across social media and dealer networks." },
  { icon: Target, text: "Improved customer satisfaction by 8% and client retention by 5% through proactive follow-ups and personalized communication." },
  { icon: BarChart3, text: "Conducted end-of-internship data analysis and presented actionable recommendations to senior management on market expansion opportunities." },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Work <span className="text-gradient-gold">Experience</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2">
            <Briefcase size={16} className="text-primary" />
            <span className="text-primary font-body text-sm font-medium">ASR Seeds Pvt. Ltd · Marketing & Sales Intern</span>
          </div>
          <p className="text-muted-foreground text-sm font-body mt-3">May 2024 – July 2024 · Hyderabad, India · 9 Weeks</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Image + Overview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-8 items-center mb-10"
          >
            <div className="overflow-hidden rounded-lg shadow-card">
              <img
                src={asrSeedsImg}
                alt="ASR Seeds Internship"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">Marketing & Sales Internship</h3>
              <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-4">
                Completed a 9-week intensive internship at ASR Seeds Pvt. Ltd, a leading player in the chilli seed industry.
                Worked across market research, lead generation, sales execution, and client relationship management.
                Applied data-driven strategies to identify market opportunities and drive measurable business outcomes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Market Research", "Lead Generation", "Sales", "CRM", "Client Management", "Data Analysis", "Digital Campaigns"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-xs font-body font-medium px-3 py-1 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[
              { label: "Leads Generated", value: "150+", detail: "Qualified prospects" },
              { label: "Appointments", value: "30+", detail: "Client meetings scheduled" },
              { label: "Sales Revenue", value: "₹75K", detail: "Direct sales achieved" },
              { label: "Engagement Boost", value: "12%", detail: "Campaign engagement increase" },
            ].map((metric, idx) => (
              <div key={metric.label} className="bg-card rounded-lg p-5 border border-border text-center">
                <p className="font-display text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs font-body text-muted-foreground mt-1">{metric.label}</p>
                <p className="text-[10px] font-body text-muted-foreground/70 mt-0.5">{metric.detail}</p>
              </div>
            ))}
          </motion.div>

          {/* Achievements */}
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 4}
                variants={fadeUp}
                className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="mt-0.5 bg-primary/10 rounded-md p-2 flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <p className="text-secondary-foreground font-body text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
