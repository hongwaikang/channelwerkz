"use client";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Driven by Purpose",
      desc: "Every project begins with a clear goal — to transform creative ideas into meaningful brand experiences that inspire and connect.",
    },
    {
      icon: Lightbulb,
      title: "Innovative at Heart",
      desc: "We embrace design thinking and cutting-edge tools to create solutions that are bold, functional, and tailored to every brand.",
    },
    {
      icon: Users,
      title: "Built on Collaboration",
      desc: "We believe in partnership — working closely with clients and creators to bring visions to life with precision and care.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-brand-neutral text-brand-primary overflow-hidden">
      {/* ========================= BACKGROUND GRID ========================= */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-accent/25 via-brand-secondary/20 to-brand-neutral"></div>

      {/* ========================= HERO SECTION ========================= */}
      <section className="relative grid md:grid-cols-2 items-center max-w-7xl mx-auto px-6 pt-32 pb-28 gap-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-heading font-bold leading-[1.1] mb-8">
            Crafting Experiences  
            <span className="block text-brand-accent">That Move People.</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-dark opacity-90 max-w-lg leading-relaxed">
            We design and build immersive brand environments — merging creative
            vision with technical mastery to bring ideas into the real world.
          </p>
        </motion.div>

        {/* Right: Floating shapes */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-72 h-72 bg-brand-accent/20 blur-3xl rounded-full -z-10" />
          <div className="absolute w-56 h-56 bg-brand-secondary/20 blur-3xl rounded-full top-20 -right-10 -z-10" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="w-64 h-64 rounded-3xl overflow-hidden shadow-xl border border-white/20"
          >
            <img
              src="/images/portfolio/festival_deco-hari_raya_maybank_7_cropped.jpg"
              alt="ChannelWerkz"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute w-36 h-36 rounded-xl overflow-hidden shadow-lg border border-white/20 top-10 left-10"
          >
            <img
              src="/images/portfolio/hanging_crane.jpg"
              alt="ChannelWerkz Small"
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20" />

      {/* ========================= ESSENCE SECTION ========================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12">
        {/* Accent vertical bar */}
        <div className="hidden md:block col-span-1">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[4px] bg-gradient-to-b from-brand-accent to-brand-secondary rounded-full mx-auto"
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="col-span-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Our Essence
          </h2>

          <p className="text-lg text-brand-dark opacity-90 leading-relaxed max-w-3xl">
            Established in Singapore, ChannelWerkz bridges design and production
            to create impactful physical and digital experiences. From
            conceptualisation to installation, we deliver seamless, end-to-end
            creative solutions for brands that demand innovation and reliability.
            <br /><br />
            Whether it’s a nationwide campaign, a trade show booth, or a
            bespoke LED installation — we transform complex ideas into
            experiences that speak louder than words.
          </p>
        </motion.div>
      </section>

      {/* ========================= VALUES SECTION ========================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-brand-neutral/20 to-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Values in Action
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The principles that shape how we think, build, and execute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="group relative rounded-2xl p-10 bg-white shadow-lg border border-white/40 backdrop-blur-xl hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-all" />

                <div className="flex justify-center mb-6 relative">
                  <div className="absolute w-14 h-14 bg-brand-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" />
                  <Icon className="w-12 h-12 text-brand-accent relative z-10" />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================= JOURNEY TIMELINE ========================= */}
      <section className="relative py-28 px-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-20">
          Our Journey
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-brand-accent/70 to-brand-secondary/70 rounded-full"
          />

          {[
            "Humble beginnings as a small production team — united by passion, precision, and creativity.",
            "Expansion into a full-service creative studio delivering across retail, finance, hospitality, and government.",
            "A growing belief that design excellence and flawless execution must always coexist."
          ].map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`relative mb-16 flex ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-white border border-brand-neutral/40 shadow-md p-8 rounded-xl max-w-sm relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-brand-accent rounded-full shadow" />
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================= CTA SECTION ========================= */}
      <section className="relative py-28 text-center overflow-hidden bg-gradient-to-br from-brand-accent/25 via-white to-brand-secondary/10">
        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.4),transparent_70%)]"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let’s Build Something Meaningful
          </h2>
          <p className="text-lg md:text-xl text-brand-dark mb-10 opacity-90">
            From concept to installation, we transform your vision into
            experiences that move people and deliver impact.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-md bg-brand-accent text-white font-medium shadow-lg hover:bg-brand-primary transition"
          >
            Start a Project
          </motion.a>
        </div>
      </section>
    </main>
  );
}
