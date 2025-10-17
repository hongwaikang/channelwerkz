"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { X } from "lucide-react";

export default function Portfolio() {
  // === Project Data ===
  const projects = [
    {
      title: "Booth Design & Setup",
      category: "Events",
      desc: "Custom booth design and on-site setup for trade fairs and corporate exhibitions, combining architectural structure with creative branding.",
      featured: true,
    },
    {
      title: "Festival Decoration – Design & Setup",
      category: "Festive Decorations",
      desc: "Comprehensive festive installation services for malls and events, including archways, hanging decor, and full thematic setups.",
    },
    {
      title: "Premium Gifts – Design, Production & Delivery",
      category: "Gifts & Packaging",
      desc: "Concept-to-delivery corporate gift solutions with bespoke packaging, custom branding, and high-quality finishing.",
    },
    {
      title: "Printing – Design, Production & Installation",
      category: "Printing & Displays",
      desc: "Large-format and offset printing with professional installation for events, exhibitions, and retail campaigns.",
    },
    {
      title: "Window Display – Design & Setup",
      category: "Printing & Displays",
      desc: "Visual merchandising and window display design for retail stores — crafted to attract attention and express brand personality.",
    },
    {
      title: "LED Backdrop – Design & Setup",
      category: "Digital Displays",
      desc: "High-resolution LED backdrops and display walls for corporate events and performances, designed for visual impact and easy control.",
    },
    {
      title: "Event Backdrop & Architecture – Design & Setup",
      category: "Events",
      desc: "Architectural backdrops and structural designs for stages, product launches, and award ceremonies — built for both form and function.",
    },
    {
      title: "Lightbox – Setup",
      category: "Printing & Displays",
      desc: "Illuminated signage and lightbox installations for commercial environments, with custom fabrication and LED integration.",
    },
  ];

  // === Modal and Filter States ===
  const [selected, setSelected] = useState<{
    title: string;
    category: string;
    desc: string;
    featured?: boolean;
  } | null>(null);

  const [activeFilter, setActiveFilter] = useState("All");

  // === Categories ===
  const categories = [
    "All",
    "Events",
    "Festive Decorations",
    "Printing & Displays",
    "Gifts & Packaging",
    "Digital Displays",
  ];

  // === Animation Settings ===
  const container: Variants = {
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
      transition: { duration: 0.6 },
    },
  };

  // === Filter Logic ===
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-20 pb-16 px-4 sm:px-8">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto mb-6">
          A showcase of ChannelWerkz’s expertise — from immersive booth and event setups
          to high-quality displays, printing, and premium gifting solutions.
        </p>

        {/* Filter Buttons with Animated Underline */}
        <div className="relative flex flex-wrap justify-center gap-2 sm:gap-4 border-b border-gray-200 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeFilter === cat
                  ? "text-brand-accent"
                  : "text-gray-600 hover:text-brand-primary"
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-brand-accent rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      {activeFilter === "All" &&
        projects
          .filter((p) => p.featured)
          .map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onClick={() => setSelected(proj)}
              className="cursor-pointer max-w-6xl mx-auto mb-16 relative overflow-hidden rounded-3xl shadow-xl group bg-white border border-gray-100 p-16 flex flex-col items-center justify-center text-center hover:shadow-2xl transition"
            >
              <h3 className="font-heading font-bold text-4xl mb-4 text-brand-primary">
                {proj.title}
              </h3>
              <p className="text-brand-secondary font-semibold mb-3">
                {proj.category}
              </p>
              <p className="text-gray-600 font-body max-w-xl mx-auto">{proj.desc}</p>
            </motion.div>
          ))}

      {/* Project Grid */}
      <motion.section
        key={activeFilter}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects
            .filter((p) => !p.featured || activeFilter !== "All")
            .map((proj, i) => (
              <motion.div
                key={i}
                {...({ layout: true } as HTMLMotionProps<"div">)}
                variants={item}
                onClick={() => setSelected(proj)}
                className="cursor-pointer group relative bg-white border border-gray-100 p-10 rounded-2xl shadow-md hover:shadow-xl transition text-center flex flex-col items-center justify-center"
              >
                <h3 className="font-heading font-semibold text-xl text-brand-primary mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{proj.category}</p>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  {proj.desc.slice(0, 100)}...
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-brand-accent text-white p-2 rounded-full hover:bg-brand-primary transition"
              >
                <X size={20} />
              </button>

              <div className="text-center mt-4">
                <h2 className="text-2xl font-heading font-bold text-brand-primary mb-2">
                  {selected.title}
                </h2>
                <p className="text-brand-secondary font-semibold mb-3">
                  {selected.category}
                </p>
                <p className="text-gray-700 font-body">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
