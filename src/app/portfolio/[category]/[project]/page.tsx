"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioData";

// ✅ Shared interface for all project items
interface ProjectItem {
  title: string;
  desc: string;
  image?: string;
  images?: string[];
}

export default function CategoryPage() {
  const { category } = useParams();

  const currentCategory = portfolioCategories.find((c) => c.slug === category);
  const rawProjects =
    portfolioProjects[category as keyof typeof portfolioProjects] || [];

  // ✅ Normalize all projects to always have images[]
  const projects: ProjectItem[] = (rawProjects as any[]).map((p) => ({
    ...p,
    images:
      Array.isArray(p.images) && p.images.length > 0
        ? p.images
        : p.image
        ? [p.image]
        : ["/images/placeholder.jpg"],
  }));

  if (!currentCategory) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center text-brand-dark">
        <h1 className="text-4xl font-heading font-bold text-brand-primary mb-2">
          Category Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          The category you’re looking for doesn’t exist or may have been moved.
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
      {/* === Breadcrumb === */}
      <div className="max-w-6xl mx-auto mb-8 text-sm font-body text-gray-600">
        <Link
          href="/portfolio"
          className="text-brand-accent hover:text-brand-primary transition"
        >
          Portfolio
        </Link>{" "}
        / <span className="text-brand-primary font-medium">
          {currentCategory.title}
        </span>
      </div>

      {/* === Header === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          {currentCategory.title}
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
          {currentCategory.description ||
            "Explore our curated projects showcasing design, craftsmanship, and innovation."}
        </p>
      </motion.section>

      {/* === Project Cards Grid === */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => {
          const coverImage =
            proj.images && proj.images.length > 0
              ? proj.images[0]
              : "/images/placeholder.jpg";

          const slug = proj.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
            >
              <Link href={`/portfolio/${category}/${slug}`}>
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={coverImage}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-xl font-heading font-bold mb-1">
                      {proj.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </section>

      {/* === Back Button === */}
      <div className="max-w-5xl mx-auto text-center mt-16">
        <Link
          href="/portfolio"
          className="inline-block bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
