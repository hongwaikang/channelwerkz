"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "Festival Decoration",
      description:
        "We create immersive festive environments — from thematic mall decorations to large-scale installations that capture the season’s spirit and amplify brand presence.",
      image: "/images/portfolio/festival_deco-cny_dog.jpg",
      category: "Festive Displays",
      link: "/portfolio/festival-decoration",
    },
    {
      title: "LED Backdrop",
      description:
        "Dynamic LED backdrops and digital display systems designed to engage audiences with vivid visuals, interactive content, and seamless integration for events and performances.",
      image: "/images/portfolio/led_backdrop-alibaba.jpeg",
      category: "Digital Displays",
      link: "/portfolio/led-backdrop",
    },
    {
      title: "Exhibition & Events — Booth Design and Setup",
      description:
        "From concept to construction, our exhibition booths and event setups combine creativity, precision, and efficiency to deliver memorable brand experiences.",
      image: "/images/portfolio/exhibition_events-dbs_natas.jpeg",
      category: "Exhibition & Events",
      link: "/portfolio/exhibition-events",
    },
    {
      title: "Event Backdrop & Arch — Design & Setup",
      description:
        "Custom-designed event backdrops and arches that elevate stage presence and entrance experiences. Built with precision to suit every theme and venue size.",
      image: "/images/portfolio/event_backdrop-deloitte.jpg",
      category: "Event Installations",
      link: "/portfolio/event-backdrop",
    },
    {
      title: "Premium Gifts — Design, Production & Delivery",
      description:
        "We design and produce bespoke premium gifts with full customization options — from concept sketches to packaging and final delivery, reflecting your brand’s quality and care.",
      image: "/images/portfolio/premium_gifts-uob_9.jpg",
      category: "Corporate Gifts",
      link: "/portfolio/premium-gifts",
    },
    {
      title: "Printing — Design, Production & Installation",
      description:
        "Comprehensive printing solutions covering large-format visuals, retail signage, and on-site installations — executed with accuracy, speed, and brand consistency.",
      image: "/images/portfolio/printing_installation-uob.jpg",
      category: "Printing Solutions",
      link: "/portfolio/printing",
    },
  ];

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-24 pb-20 px-6">
      {/* === Page Header === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Our Portfolio of Work
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
          ChannelWerkz transforms creative concepts into captivating real-world
          experiences — spanning festive décor, digital installations, exhibitions,
          event backdrops, premium gifting, and large-format printing.
        </p>
      </motion.section>

      {/* === Alternating Sections === */}
      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            } ${
              i % 2 !== 0
                ? "bg-white/50 rounded-3xl p-8 shadow-sm"
                : ""
            }`}
          >
            {/* === Image === */}
            <div className="relative flex-1 overflow-hidden rounded-3xl shadow-md">
              <Image
                src={proj.image}
                alt={proj.title}
                width={900}
                height={600}
                className="w-full aspect-[4/3] object-cover rounded-3xl transform hover:scale-105 transition duration-700"
              />
              {/* Hover Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition duration-500 rounded-3xl" />
            </div>

            {/* === Text === */}
            <div className="flex-1 space-y-4 md:px-6 text-center md:text-left">
              <h2 className="text-3xl font-heading font-bold text-brand-primary">
                {proj.title}
              </h2>
              <p className="text-gray-700 font-body leading-relaxed text-base md:text-lg">
                {proj.description}
              </p>
              <Link
                href={proj.link}
                className="inline-flex items-center text-brand-accent hover:text-brand-primary font-medium transition group"
              >
                Explore {proj.category.toLowerCase()}{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
