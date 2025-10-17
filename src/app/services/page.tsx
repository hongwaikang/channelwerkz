"use client";
import { motion, Variants } from "framer-motion";
import {
  Megaphone,
  Printer,
  Monitor,
  Briefcase,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Integrated Marketing",
      desc: "Strategic campaigns that connect digital, print, and on-ground activations to drive measurable results.",
      icon: Megaphone,
      gradient: "from-brand-accent/10 to-brand-secondary/10",
    },
    {
      title: "Printing Solutions",
      desc: "High-quality, fast-turnaround printing for events, retail, and promotional campaigns.",
      icon: Printer,
      gradient: "from-brand-secondary/10 to-brand-accent/10",
    },
    {
      title: "Event Setup & Branding",
      desc: "Full event branding support from booth design to setup, ensuring your presence stands out.",
      icon: Briefcase,
      gradient: "from-brand-accent/10 to-brand-neutral",
    },
    {
      title: "Digital Display Systems",
      desc: "LED, LCD, and projection systems with content scheduling and analytics to engage audiences dynamically.",
      icon: Monitor,
      gradient: "from-brand-accent/10 to-brand-secondary/10",
    },
  ];

  // Animation settings
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }, // ease removed, Framer defaults to easeInOut
    },
  };

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-20 pb-16 px-6">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
          ChannelWerkz delivers comprehensive solutions that merge creativity with technology —
          empowering brands to communicate effectively across every touchpoint.
        </p>
      </section>

      {/* Scroll reveal gradient banner */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-1 max-w-6xl mx-auto mb-10 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-full shadow-sm"
      />

      {/* Animated service cards */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={item}
              className={`relative group bg-white rounded-2xl shadow-md p-6 border border-brand-accent/10 hover:shadow-lg hover:-translate-y-1 transition duration-300`}
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${service.gradient} rounded-2xl`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-brand-accent to-brand-secondary text-white shadow-md">
                  <Icon size={28} />
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
    </main>
  );
}
