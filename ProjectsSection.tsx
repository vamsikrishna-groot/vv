import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, ShoppingCart, Target, BarChart3, Instagram, Facebook } from "lucide-react";
import auroGlowImg from "@/assets/auroglow-project.jpg";
import asrSeedsImg from "@/assets/asr-seeds-project.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const auroGlowMetrics = [
  { icon: TrendingUp, label: "Engagement Rate", value: "8.5%", detail: "Above industry avg of 3%" },
  { icon: ShoppingCart, label: "Website Conversions", value: "120+", detail: "Orders in first 3 months" },
  { icon: Target, label: "Ad ROAS", value: "3.2x", detail: "Return on ad spend" },
];

const auroGlowHighlights = [
  "Built a Shopify-based e-commerce store from scratch with optimized product pages, SEO-friendly descriptions, and mobile-first design",
  "Developed and executed a full social media strategy across Instagram and Facebook — content calendar, reels, stories, and influencer collaborations",
  "Ran targeted Meta Ads campaigns with A/B testing on creatives, achieving a 3.2x ROAS and reducing CPA by 35%",
  "Implemented email marketing funnels using Mailchimp — welcome series, abandoned cart recovery, and promotional campaigns with 22% open rate",
  "Managed end-to-end CRM using HubSpot to track customer journeys, segment audiences, and drive repeat purchases",
  "Conducted competitor analysis and market research to position AuroGlow in the natural/organic skincare niche",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-gradient-gold">Projects</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-24">
          {/* AuroGlow — Expanded Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
              <div className="overflow-hidden rounded-lg shadow-card">
                <img
                  src={auroGlowImg}
                  alt="AuroGlow Skincare E-commerce"
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
                  AuroGlow — Digital Marketing & E-commerce
                  <a href="https://auroglow.shop" target="_blank" rel="noreferrer" className="text-primary hover:text-accent transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <Instagram size={14} className="text-primary" /> Instagram
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <Facebook size={14} className="text-primary" /> Facebook
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <ShoppingCart size={14} className="text-primary" /> Shopify
                  </span>
                </div>
                <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-5">
                  Conceptualized and launched <strong className="text-foreground">AuroGlow</strong>, a direct-to-consumer skincare brand
                  focused on natural and organic products. Led all aspects of digital marketing — from building the
                  e-commerce platform to running paid campaigns and managing customer relationships. This project
                  demonstrates end-to-end marketing execution with measurable business outcomes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["E-commerce", "Meta Ads", "SEO", "CRM", "Email Marketing", "Content Strategy", "Analytics"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary text-xs font-body font-medium px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {auroGlowMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-background rounded-lg p-5 border border-border text-center"
                >
                  <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-xs font-body text-muted-foreground mt-1">{metric.label}</p>
                  <p className="text-[10px] font-body text-muted-foreground/70 mt-0.5">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="bg-background rounded-lg border border-border p-6">
              <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Key Achievements & Responsibilities
              </h4>
              <ul className="space-y-3">
                {auroGlowHighlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 text-sm font-body text-secondary-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ASR Seeds — Brief */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="overflow-hidden rounded-lg shadow-card md:order-2">
              <img
                src={asrSeedsImg}
                alt="ASR Seeds Internship"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:order-1">
              <h3 className="font-display text-2xl font-semibold mb-4">
                ASR Seeds — Market Research & Sales Strategy
              </h3>
              <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-5">
                Conducted comprehensive market research and led sales initiatives during a 9-week internship in the chilli seed industry. Generated 150+ leads, managed 20+ client relationships, and achieved ₹75,000 in sales through data-driven strategies. Full details in the <a href="#experience" className="text-primary hover:underline">Experience</a> section.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Market Research", "Lead Generation", "Sales", "Client Management", "Data Analysis"].map((tag) => (
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
