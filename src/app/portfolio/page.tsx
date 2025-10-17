"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Portfolio() {
  // === Project Data ===
  const projects = [
    {
      title: "Booth Design & Setup",
      category: "Events",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1600&auto=format&fit=crop",
      desc: "Custom booth design and on-site setup for trade fairs and corporate exhibitions, combining architectural structure with creative branding.",
      featured: true,
    },
    {
      title: "Festival Decoration – Design & Setup",
      category: "Festive Decorations",
      image: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?q=80&w=1000&auto=format&fit=crop",
      desc: "Comprehensive festive installation services for malls and events, including archways, hanging decor, and full thematic setups.",
    },
    {
      title: "Premium Gifts – Design, Production & Delivery",
      category: "Gifts & Packaging",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1000&auto=format&fit=crop",
      desc: "Concept-to-delivery corporate gift solutions with bespoke packaging, custom branding, and high-quality finishing.",
    },
    {
      title: "Printing – Design, Production & Installation",
      category: "Printing & Displays",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000&auto=format&fit=crop",
      desc: "Large-format and offset printing with professional installation for events, exhibitions, and retail campaigns.",
    },
    {
      title: "Window Display – Design & Setup",
      category: "Printing & Displays",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000&auto=format&fit=crop",
      desc: "Visual merchandising and window display design for retail stores — crafted to attract attention and express brand personality.",
    },
    {
      title: "LED Backdrop – Design & Setup",
      category: "Digital Displays",
      image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f0?q=80&w=1000&auto=format&fit=crop",
      desc: "High-resolution LED backdrops and display walls for corporate events and performances, designed for visual impact and easy control.",
    },
    {
      title: "Event Backdrop & Architecture – Design & Setup",
      category: "Events",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1000&auto=format&fit=crop",
      desc: "Architectural backdrops and structural designs for stages, product launches, and award ceremonies — built for both form and function.",
    },
    {
      title: "Lightbox – Setup",
      category: "Printing & Displays",
      image: "https://images.unsplash.com/photo-1612810806695-30ac06a013bd?q=80&w=1000&auto=format&fit=crop",
      desc: "Illuminated signage and lightbox installations for commercial environments, with custom fabrication and LED integration.",
    },
  ];

  // === Modal and Filter States ===
  const [selected, setSelected] = useState(null);
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
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
              className="cursor-pointer max-w-6xl mx-auto mb-16 relative overflow-hidden rounded-3xl shadow-xl group"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500 rounded-3xl" />
              <div className="absolute bottom-6 left-8 text-white z-10">
                <h3 className="font-heading font-bold text-3xl mb-2">{proj.title}</h3>
                <p className="text-brand-secondary font-semibold">{proj.category}</p>
                <p className="max-w-md text-sm mt-2 text-gray-100">{proj.desc}</p>
              </div>
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
                variants={item}
                layout
                onClick={() => setSelected(proj)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="font-heading font-semibold text-lg">{proj.title}</h3>
                  <p className="text-sm text-brand-secondary">{proj.category}</p>
                </div>
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
              className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
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

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
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
