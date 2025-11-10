"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories, portfolioProjects } from "@/data/portfolioData";

export default function ProjectPage() {
  const { category, project } = useParams();

  const currentCategory = portfolioCategories.find((c) => c.slug === category);
  const projects =
    portfolioProjects[category as keyof typeof portfolioProjects] || [];

  const currentProject = projects.find(
    (p) =>
      p.title.toLowerCase().replace(/\s+/g, "-") ===
      (project as string).toLowerCase()
  );

  // ✅ Fix TypeScript error safely
  let images: string[] = [];
  if (currentProject) {
    if (Array.isArray((currentProject as any).images)) {
      images = (currentProject as any).images;
    } else if (typeof (currentProject as any).image === "string") {
      images = [(currentProject as any).image];
    }
  }

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

      {/* === Masonry Layout (Guaranteed) === */}
      {images.length > 0 && (
        <section className="max-w-6xl mx-auto mb-16">
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt={currentProject.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-3xl shadow-md object-cover"
            />
          ) : (
            <div
              className="
                columns-1
                sm:columns-2
                lg:columns-3
                gap-5
              "
            >
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <Image
                    src={img}
                    alt={`${currentProject.title} ${idx + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* === Back Button === */}
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
