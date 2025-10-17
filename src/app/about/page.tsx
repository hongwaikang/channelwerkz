"use client";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-20 pb-16 px-6">
      {/* === Header Section === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          About ChannelWerkz
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
          ChannelWerkz is a Singapore-based creative solutions provider specializing in
          integrated marketing, event setup, and display production. We bring ideas to life
          through design, fabrication, and technology — helping brands engage audiences
          through every channel.
        </p>
      </motion.section>

      {/* === Gradient Banner Divider === */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="relative my-20"
      >
        <div className="max-w-6xl mx-auto text-center py-16 px-4 rounded-3xl bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent shadow-md text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            “Creating Impact Through Design, Precision, and Passion.”
          </h2>
          <p className="text-base md:text-lg font-body max-w-3xl mx-auto opacity-90">
            Every project at ChannelWerkz starts with an idea — and we transform that idea into
            a tangible experience that connects brands with people.
          </p>
        </div>

        {/* Subtle blurred glow behind */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/40 to-brand-secondary/40 blur-3xl opacity-40 -z-10" />
      </motion.section>

      {/* === Mission / Vision / Approach === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
      >
        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <Target className="w-10 h-10 text-brand-accent" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 font-body leading-relaxed">
            To provide end-to-end creative, printing, and event solutions that merge design
            excellence with practical execution — ensuring every project reflects our
            client’s brand story and purpose.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <Lightbulb className="w-10 h-10 text-brand-accent" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 font-body leading-relaxed">
            To be Singapore’s trusted partner for integrated creative marketing — blending
            innovation, craftsmanship, and technology to shape impactful experiences.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
          <div className="flex justify-center mb-4">
            <Users className="w-10 h-10 text-brand-accent" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
            Our Approach
          </h2>
          <p className="text-gray-700 font-body leading-relaxed">
            We combine creative design with hands-on production expertise, ensuring that
            every booth, display, and installation is delivered with precision, quality, and
            heart.
          </p>
        </div>
      </motion.section>

      {/* === Company Story Section === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-heading font-bold text-brand-primary mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 font-body leading-relaxed mb-6">
          Since our founding, ChannelWerkz has grown into a multidisciplinary creative
          production house trusted by brands and event organizers across Singapore.
          Our team blends design innovation with technical know-how — creating immersive
          event spaces, captivating displays, and impactful visual experiences.
        </p>
        <p className="text-gray-700 font-body leading-relaxed">
          From exhibition booths and retail displays to premium gifts and digital signage,
          we approach every project with one goal: to make your brand unforgettable.
        </p>
      </motion.section>
    </main>
  );
}
