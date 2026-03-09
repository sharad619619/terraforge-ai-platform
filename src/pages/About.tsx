import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import logo from "@/assets/terraforge-logo.jpeg";
import founderImage from "@/assets/founder-sharad.jpeg";

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function About() {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-tight">
          {/* Header */}
          <motion.div className="max-w-3xl mx-auto text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <img src={logo} alt="TerraForge" className="h-[70px] mx-auto mb-6 rounded-lg" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About TerraForge</h1>
            <p className="text-lg text-muted-foreground">We're building the intelligence layer for earth's subsurface, making mineral exploration smarter, faster, and more sustainable.</p>
          </motion.div>

          {/* Mission */}
          <motion.div className="glass-card p-8 md:p-12 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">To democratize access to geological intelligence by combining AI, satellite data, and geoscience expertise — reducing the cost and environmental impact of mineral exploration while accelerating the discovery of critical resources the world needs.</p>
          </motion.div>

          {/* Vision */}
          <motion.div className="glass-card p-8 md:p-12 mb-24" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">A world where every exploration decision is informed by AI — where we never drill blind, and where the transition to clean energy is accelerated by smarter mineral discovery.</p>
          </motion.div>

          {/* Founder Section */}
          <motion.div className="text-center mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="text-3xl font-bold mb-3">The Founder</h2>
            {/* Bold founding statement */}
            <p className="text-base sm:text-lg font-semibold max-w-2xl mx-auto bg-gradient-to-r from-geo-blue via-forge-orange to-geo-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient leading-snug">
              Built by a visionary founder focused on transforming mineral exploration through AI and geospatial intelligence.
            </p>
          </motion.div>

          {/* Founder Card */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <div
              className="relative rounded-2xl border border-border/50 p-10 sm:p-14 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 0 60px rgba(31,79,255,0.08), 0 0 30px rgba(255,122,26,0.04), 0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* Glow behind avatar */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-8 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(31,79,255,0.18) 0%, rgba(255,122,26,0.1) 60%, transparent 100%)" }}
              />

              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-border/50 bg-secondary flex items-center justify-center overflow-hidden"
                style={{ boxShadow: "0 0 24px rgba(31,79,255,0.25), 0 0 8px rgba(255,122,26,0.15)" }}
              >
                <User size={52} className="text-muted-foreground" />
              </div>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-1">
                Sharad Singh
              </h3>

              {/* Designation */}
              <p className="text-sm font-semibold text-forge-orange mb-6 uppercase tracking-widest">
                Founder &amp; CEO
              </p>

              {/* Divider */}
              <div className="w-16 h-px mx-auto mb-6 bg-gradient-to-r from-geo-blue to-forge-orange opacity-60" />

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed text-base max-w-lg mx-auto">
                Sharad Singh is a visionary entrepreneur focused on solving real-world problems through technology. He is passionate about building next-generation platforms that combine artificial intelligence, geospatial intelligence, and data-driven decision systems. Through TerraForge, he aims to transform how mineral and natural resource exploration is conducted by using AI-powered geospatial analysis to reduce exploration risk and enable smarter drilling decisions.
              </p>

              {/* Future team note */}
              <p className="mt-8 text-xs text-muted-foreground/60 italic max-w-md mx-auto">
                We are building a team of engineers, geospatial scientists, and exploration experts to expand the TerraForge platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

