"use client";
import { motion, Variants } from "framer-motion";
import {
  Palette,
  Printer,
  Gift,
  Monitor,
  Warehouse,
  Hammer,
} from "lucide-react";

export default function Services() {
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
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-20 pb-16 px-6">
      {/* === Header === */}
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
          ChannelWerkz offers end-to-end marketing and production solutions —
          combining design, fabrication, printing, and technology to bring your
          brand vision to life.
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative group bg-white rounded-2xl shadow-md p-8 border border-brand-accent/10 hover:shadow-xl transition duration-300`}
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${service.gradient} rounded-2xl`}
              ></div>

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-brand-accent to-brand-secondary text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon size={30} />
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

      {/* CTA footer */}
      <section className="text-center mt-24 bg-gradient-to-br from-brand-neutral via-white to-brand-accent/10 py-16 rounded-3xl shadow-inner mx-4">
        <h2 className="text-3xl font-heading font-bold text-brand-primary mb-4">
          Let’s Build Something Brilliant
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-body">
          Whether it’s a nationwide campaign or a single event, our team brings
          together creativity, craftsmanship, and reliability to deliver
          end-to-end excellence.
        </p>
        <a
          href="/contact"
          className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
