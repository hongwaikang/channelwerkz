"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Globe2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
          <Link
            href="/portfolio"
            className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
          >
            See Our Work
          </Link>
          <Link
            href="/contact"
            className="border border-brand-primary text-brand-primary px-6 py-3 rounded-md font-medium hover:bg-brand-primary hover:text-white transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Ambient color glows */}
      <div className="absolute w-96 h-96 bg-brand-secondary/20 blur-3xl rounded-full top-10 left-[-10%] -z-20"></div>
      <div className="absolute w-96 h-96 bg-brand-accent/25 blur-3xl rounded-full bottom-0 right-[-10%] -z-20"></div>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="relative w-full bg-gradient-to-br from-white via-brand-neutral/30 to-white py-28 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-6">
            Who We Are
          </h2>
          <p className="text-brand-dark text-lg md:text-xl font-body max-w-3xl mx-auto opacity-90 leading-relaxed">
            ChannelWerkz is a Singapore-based creative marketing and display
            solutions company — merging{" "}
            <span className="text-brand-accent font-semibold">design</span>,
            <span className="text-brand-primary font-semibold"> fabrication</span>,
            and <span className="text-brand-secondary font-semibold">digital technology</span> to craft experiences that move people and elevate brands.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[{
              icon: <Briefcase className="w-8 h-8 text-brand-accent" />,
              number: "10+",
              label: "Years of Industry Experience",
            },
            {
              icon: <Award className="w-8 h-8 text-brand-primary" />,
              number: "500+",
              label: "Projects Successfully Delivered",
            },
            {
              icon: <Globe2 className="w-8 h-8 text-brand-secondary" />,
              number: "Across Sectors",
              label: "Retail • Events • Digital • Corporate",
            }].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-3xl font-heading font-bold text-brand-primary mb-2">
                {item.number}
              </h3>
              <p className="text-gray-700 font-medium">{item.label}</p>
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
            A glimpse into our recent projects — combining creativity, precision, and craftsmanship across industries.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[{
              title: "Festival Decoration",
              category: "Festive Displays",
              image: "/images/portfolio/festival_deco-cny_dog.jpg",
            },
            {
              title: "Exhibition Booth Design & Setup",
              category: "Events",
              image: "/images/portfolio/exhibition_events-dbs_natas.jpeg",
            },
            {
              title: "LED Backdrop Installation",
              category: "Digital Displays",
              image: "/images/portfolio/led_backdrop-alibaba.jpeg",
            }].map((proj, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="relative overflow-hidden rounded-3xl shadow-md group"
            >
              <Link href="/portfolio" className="block">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-1">{proj.title}</h3>
                  <p className="text-sm text-brand-secondary font-medium">{proj.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA FOOTER BANNER ===== */}
      <section className="relative w-full py-24 bg-gradient-to-br from-brand-neutral via-white to-brand-accent/10 text-center text-brand-primary overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="text-lg md:text-xl font-body mb-8 opacity-90 text-brand-dark">
            From concept to setup, we create experiences that move people and deliver results. Talk to our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="border border-brand-primary text-brand-primary px-6 py-3 rounded-md font-medium hover:bg-brand-primary hover:text-white transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
