"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioData";

export default function ProjectPage() {
  const { category, project } = useParams();

  const currentCategory = portfolioCategories.find((c) => c.slug === category);
  const projects = portfolioProjects[category as keyof typeof portfolioProjects] || [];

  const currentProject = projects.find(
    (p) =>
      p.title.toLowerCase().replace(/\s+/g, "-") ===
      (project as string).toLowerCase()
  );

  if (!currentCategory || !currentProject) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center text-brand-dark">
        <h1 className="text-4xl font-heading font-bold text-brand-primary mb-2">
          Project Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          The project you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link
          href={`/portfolio/${category}`}
          className="text-brand-accent hover:text-brand-primary transition"
        >
          ← Back to {currentCategory ? currentCategory.title : "Portfolio"}
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
        /{" "}
        <Link
          href={`/portfolio/${category}`}
          className="text-brand-accent hover:text-brand-primary transition"
        >
          {currentCategory.title}
        </Link>{" "}
        / <span className="text-brand-primary font-medium">{currentProject.title}</span>
      </div>

      {/* === Project Header === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          {currentProject.title}
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
          {currentProject.desc}
        </p>
      </motion.section>

      {/* === Project Image === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-md"
      >
        <Image
          src={currentProject.image}
          alt={currentProject.title}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* === CTA or Back Button === */}
      <div className="max-w-5xl mx-auto text-center">
        <Link
          href={`/portfolio/${category}`}
          className="inline-block bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
        >
          ← Back to {currentCategory.title}
        </Link>
      </div>
    </main>
  );
}
