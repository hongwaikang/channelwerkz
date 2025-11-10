"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioCategories } from "@/data/portfolioData";

export default function Portfolio() {
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
          experiences — spanning festive décor, digital installations,
          exhibitions, event backdrops, premium gifting, and large-format printing.
        </p>
      </motion.section>

      {/* === Alternating Sections === */}
      <div className="max-w-6xl mx-auto space-y-24">
        {portfolioCategories.map((proj, i) => (
          <motion.div
            key={proj.slug}
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
                href={`/portfolio/${proj.slug}`}
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
