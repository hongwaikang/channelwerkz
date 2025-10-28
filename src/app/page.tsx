"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-brand-neutral text-brand-primary pt-16 overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-accent/30 via-brand-secondary/20 to-brand-neutral"></div>

      <section className="text-center px-6 max-w-3xl mt-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
          <span className="text-brand-primary">Integrated Marketing,</span>{" "}
          <span className="text-brand-accent">Creative Displays,</span>{" "}
          and <span className="text-brand-secondary">Digital Brilliance</span>
        </h1>

        <p className="text-lg md:text-xl text-brand-dark font-body mb-8">
          ChannelWerkz connects creativity with technology to deliver seamless
          marketing experiences that inspire engagement and trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/portfolio"
            className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
          >
            See Our Work
          </a>
          <a
            href="/contact"
            className="border border-brand-primary text-brand-primary px-6 py-3 rounded-md font-medium hover:bg-brand-primary hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Ambient color glows */}
      <div className="absolute w-96 h-96 bg-brand-secondary/20 blur-3xl rounded-full top-10 left-[-10%] -z-20"></div>
      <div className="absolute w-96 h-96 bg-brand-accent/25 blur-3xl rounded-full bottom-0 right-[-10%] -z-20"></div>

      {/* ===== GRADIENT DIVIDER ===== */}
      <div className="w-full h-40 mt-24 bg-gradient-to-b from-transparent via-brand-accent/10 to-brand-neutral" />

      {/* ===== INTRO SECTION ===== */}
      <section className="bg-white w-full py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">
            ChannelWerkz at a Glance
          </h2>
          <p className="text-brand-dark text-lg max-w-2xl mx-auto">
            We are a creative marketing and display solutions partner that
            transforms ideas into impactful experiences — from design to
            installation, all under one roof.
          </p>
        </div>
      </section>

      {/* ===== VALUE SECTION: “We Help You Achieve…” ===== */}
      <section className="relative w-full bg-brand-neutral py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">
            We Help You Achieve
          </h2>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto">
            Our work is designed around your goals — whether that’s attracting
            attention, inspiring engagement, or delivering measurable impact.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-10 border border-brand-accent/10 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold ${
                  i === 1
                    ? "bg-gradient-to-br from-brand-accent to-brand-primary"
                    : i === 2
                    ? "bg-gradient-to-br from-brand-secondary to-brand-accent"
                    : "bg-gradient-to-br from-brand-primary to-brand-secondary"
                }`}
              >
                {i}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-primary mb-3">
                {i === 1
                  ? "Visibility that Converts"
                  : i === 2
                  ? "Memorable Brand Moments"
                  : "Seamless End-to-End Execution"}
              </h3>
              <p className="text-brand-dark text-sm leading-relaxed">
                {i === 1
                  ? "Designs that don’t just attract — they convert. Our displays are built to draw audiences and drive real engagement."
                  : i === 2
                  ? "From festivals to product launches, we design experiences that connect emotionally and leave a lasting impression."
                  : "From concept to delivery, every detail is handled in-house for efficiency, quality, and peace of mind."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== OUR WORK IN ACTION ===== */}
      <section className="relative w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-brand-dark max-w-2xl mx-auto">
            See how ChannelWerkz brings creativity and precision together to
            craft impactful brand experiences for every occasion.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              title: "Booth Design & Setup",
              category: "Events",
              image:
                "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Festival Decoration",
              category: "Festive Displays",
              image:
                "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "LED Display Backdrops",
              category: "Digital Displays",
              image:
                "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f0?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((proj, i) => (
            <motion.a
              key={i}
              href="/portfolio"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="relative overflow-hidden rounded-3xl shadow-md group cursor-pointer"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl font-bold mb-1">
                  {proj.title}
                </h3>
                <p className="text-sm text-brand-secondary font-medium">
                  {proj.category}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA FOOTER BANNER (SOFT GRADIENT VERSION) ===== */}
      <section className="relative w-full py-24 bg-gradient-to-br from-brand-neutral via-white to-brand-accent/10 text-center text-brand-primary overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="text-lg md:text-xl font-body mb-8 opacity-90 text-brand-dark">
            From concept to setup, we create experiences that move people and
            deliver results. Talk to our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="border border-brand-primary text-brand-primary px-6 py-3 rounded-md font-medium hover:bg-brand-primary hover:text-white transition"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Subtle ambient glow accents */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-accent/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/20 blur-3xl rounded-full" />
      </section>
    </main>
  );
}
