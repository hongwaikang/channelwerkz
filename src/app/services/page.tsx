"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Palette,
  Printer,
  Gift,
  Monitor,
  Warehouse,
  Hammer,
  PenTool,
  Truck,
} from "lucide-react";
import { useRef } from "react";

export default function Services() {
  // === Refs for scroll-based parallax ===
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // === Animation Variants ===
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // === Services Data ===
  const services = [
    {
      title: "Creative Concept & Design",
      desc: "We conceptualise and design visual experiences that align with your brand story — from campaigns to full event environments.",
      icon: Palette,
      gradient: "from-brand-accent/10 to-brand-secondary/10",
    },
    {
      title: "Print Production & Large-Format Visuals",
      desc: "High-quality offset, digital, and large-format printing with precision finishing for displays, events, and retail spaces.",
      icon: Printer,
      gradient: "from-brand-secondary/10 to-brand-accent/10",
    },
    {
      title: "Corporate Gifts & Packaging",
      desc: "Custom-branded gifts and packaging — designed, produced, and delivered with premium craftsmanship and attention to detail.",
      icon: Gift,
      gradient: "from-brand-accent/10 to-brand-neutral",
    },
    {
      title: "Digital Display Systems & CMS",
      desc: "Dynamic LED and LCD displays powered by a custom content management system for easy updates and audience analytics.",
      icon: Monitor,
      gradient: "from-brand-accent/10 to-brand-secondary/10",
    },
    {
      title: "Event Structure Fabrication",
      desc: "Bespoke fabrication for event booths, stages, arches, and backdrops — built for impact, safety, and quick deployment.",
      icon: Hammer,
      gradient: "from-brand-accent/10 to-brand-neutral",
    },
    {
      title: "Warehousing & Logistics",
      desc: "End-to-end inventory management and logistics support to store, handle, and deliver your marketing assets efficiently.",
      icon: Warehouse,
      gradient: "from-brand-secondary/10 to-brand-accent/10",
    },
  ];

  // === Process Pillars ===
  const pillars = [
    {
      title: "Design & Ideation",
      icon: PenTool,
      desc: "Our creative process starts with strategy — transforming ideas into clear, impactful design concepts that connect with audiences. From campaign planning to visual mockups, we ensure each idea aligns with your brand identity.",
      gradient: "from-brand-accent/10 via-brand-secondary/5 to-transparent",
      align: "left",
    },
    {
      title: "Production & Execution",
      icon: Printer,
      desc: "Our in-house facilities cover printing, fabrication, and digital display production. We deliver every piece with precision, consistency, and efficiency — all managed under one roof for total control and reliability.",
      gradient: "from-transparent via-brand-secondary/10 to-brand-accent/10",
      align: "right",
    },
    {
      title: "Delivery & Support",
      icon: Truck,
      desc: "From delivery to installation and post-event support, our logistics and warehousing teams ensure seamless execution and lasting reliability. We treat every project as a long-term partnership, not just a transaction.",
      gradient: "from-brand-accent/10 via-brand-secondary/5 to-transparent",
      align: "left",
    },
  ];

  return (
    <main
      ref={ref}
      className="min-h-screen bg-brand-neutral text-brand-dark pt-20 pb-16 overflow-hidden"
    >
      {/* === HEADER SECTION === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center px-6 mb-16 relative"
      >
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-accent/20 via-brand-secondary/10 to-transparent blur-3xl opacity-70"
        />
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-primary mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
          ChannelWerkz offers end-to-end marketing and production solutions —
          combining design, fabrication, printing, and technology to bring your
          brand vision to life.
        </p>
      </motion.section>

      {/* === SERVICES GRID === */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-32"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative group bg-white rounded-2xl shadow-md p-8 border border-brand-accent/10 hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-secondary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={34} />
                </div>
                <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 font-body text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.section>

      {/* === OUR PROCESS === */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-brand-accent/10 via-brand-secondary/5 to-brand-neutral overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-20 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4"
          >
            Our Process: From Vision to Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 font-body max-w-3xl mx-auto"
          >
            Every project moves through three key stages — design, production, and delivery.
            This seamless flow keeps creativity and craftsmanship aligned at every step.
          </motion.p>

          {/* Ambient gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 via-brand-secondary/10 to-transparent blur-3xl -z-10" />
        </div>

        {/* === PROCESS STEPS === */}
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-8">
          {[
            {
              number: 1,
              title: "Design & Ideation",
              icon: PenTool,
              desc: "We begin by understanding your goals and translating insights into bold, strategic design concepts.",
            },
            {
              number: 2,
              title: "Production & Execution",
              icon: Printer,
              desc: "Our in-house team manages fabrication, printing, and installation — ensuring precision and consistency.",
            },
            {
              number: 3,
              title: "Delivery & Support",
              icon: Truck,
              desc: "From logistics to post-event support, we provide reliability and care long after launch day.",
            },
          ].map((step, i, arr) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative flex-1 bg-white rounded-2xl shadow-md border border-brand-accent/10 p-8 text-center hover:shadow-xl transition"
              >
                {/* Number Badge – neutral tone with brand border */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-brand-accent bg-white flex items-center justify-center text-brand-accent font-heading font-bold shadow-sm">
                  {step.number}
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-secondary text-white shadow-md mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed text-base max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting Arrow (desktop only) */}
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute right-[-45px] top-1/2 -translate-y-1/2">
                    <svg
                      width="70"
                      height="24"
                      viewBox="0 0 70 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-brand-accent opacity-60"
                    >
                      <path
                        d="M0 12h64m0 0l-8-8m8 8l-8 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* === CTA FOOTER === */}
      <section className="relative text-center mt-28 bg-gradient-to-br from-brand-neutral via-white to-brand-accent/10 py-24 rounded-3xl shadow-inner mx-4 overflow-hidden">
        {/* Ambient glow (subtle background energy) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 via-brand-secondary/5 to-transparent blur-3xl -z-10" />

        <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">
          Let’s Build Something Brilliant
        </h2>
        <p className="text-brand-dark/80 mb-8 max-w-2xl mx-auto font-body text-lg leading-relaxed">
          Whether it’s a nationwide campaign or a single event, our team brings
          together creativity, craftsmanship, and reliability to deliver
          end-to-end excellence — beautifully and seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-brand-accent text-white px-8 py-3 rounded-md font-medium shadow-md hover:shadow-lg hover:bg-brand-primary transition"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="border border-brand-accent text-brand-accent px-8 py-3 rounded-md font-medium hover:bg-brand-accent hover:text-white transition"
          >
            View Our Work
          </a>
        </div>
      </section>

    </main>
  );
}
