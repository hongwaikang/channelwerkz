"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioData";

export default function CategoryPage() {
  const { category } = useParams();

  const currentCategory = portfolioCategories.find(
    (c) => c.slug === category
  );
  const projects =
    portfolioProjects[category as keyof typeof portfolioProjects] || [];

  if (!currentCategory) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center text-brand-dark">
        <h1 className="text-4xl font-heading font-bold text-brand-primary mb-2">
          Category Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          The category you’re looking for doesn’t exist.
        </p>
        <Link
          href="/portfolio"
          className="text-brand-accent hover:text-brand-primary transition"
        >
          ← Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-24 pb-20 px-6">
      {/* === Header === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          {currentCategory.title}
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
          {currentCategory.description}
        </p>
      </motion.section>

      {/* === Projects Grid === */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => {
              const slug = proj.title.toLowerCase().replace(/\s+/g, "-");

              // Handle single or multiple images
              const coverImage = Array.isArray(proj.images)
                ? proj.images[0]
                : proj.image
                ? proj.image
                : "/images/placeholder.jpg";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* ✅ Entire card clickable */}
                  <Link
                    href={`/portfolio/${category}/${slug}`}
                    className="block group"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={coverImage}
                        alt={proj.title}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="font-heading text-lg font-semibold text-brand-primary mb-1">
                        {proj.title}
                      </h3>
                      {proj.desc && (
                        <p className="text-sm text-gray-600 font-body leading-relaxed">
                          {proj.desc}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-body">
            No projects found in this category yet.
          </p>
        )}

        {/* === Back Button === */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-block text-brand-accent hover:text-brand-primary transition font-medium"
          >
            ← Back to All Categories
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
