"use client";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Driven by Purpose",
      desc: "Every project begins with a clear goal — to transform creative ideas into meaningful brand experiences that inspire and connect.",
    },
    {
      icon: Lightbulb,
      title: "Innovative at Heart",
      desc: "We embrace design thinking and cutting-edge tools to create solutions that are as bold as they are functional.",
    },
    {
      icon: Users,
      title: "Built on Collaboration",
      desc: "Our team believes in partnership — working closely with clients, agencies, and creators to bring visions to life with precision and care.",
    },
  ];

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark overflow-hidden">
      {/* === HERO SECTION === */}
      <section className="relative flex flex-col justify-center items-center text-center pt-32 pb-28 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-primary mb-6 leading-tight">
            Where Creativity Meets Craft
          </h1>
          <p className="text-lg md:text-xl text-brand-dark font-body max-w-2xl mx-auto">
            ChannelWerkz is a multidisciplinary creative studio that designs,
            builds, and delivers immersive marketing experiences — combining
            design, fabrication, and digital technology under one roof.
          </p>
        </motion.div>

        {/* Ambient gradient glows */}
        <div className="absolute w-[500px] h-[500px] bg-brand-secondary/20 blur-3xl rounded-full top-10 left-[-10%] -z-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-brand-accent/20 blur-3xl rounded-full bottom-0 right-[-15%] -z-20"></div>
      </section>

      {/* === OUR ESSENCE SECTION === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-24 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Block */}
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-brand-primary">
              Our Essence
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Established in Singapore, ChannelWerkz bridges design and
              production to create impactful physical and digital experiences.
              From conceptualisation to installation, we deliver seamless,
              end-to-end creative solutions for brands that demand both
              innovation and reliability.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Whether it’s a nationwide campaign, a trade show booth, or a
              bespoke LED installation — we turn complex ideas into experiences
              that speak louder than words.
            </p>
          </div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-md"
          >
            <Image
              src="/images/about/workspace_team.jpg"
              alt="ChannelWerkz team at work"
              width={600}
              height={400}
              className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </div>
      </motion.section>

      {/* === OUR VALUES SECTION === */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">
            Our Values in Action
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            These are the principles that guide how we think, build, and deliver
            — ensuring that every project reflects the ChannelWerkz standard of
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative group bg-white rounded-2xl shadow-md p-8 border border-brand-accent/10 hover:shadow-lg transition duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-accent/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-xl bg-brand-accent text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon size={30} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 font-body text-base leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* === OUR JOURNEY SECTION === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full py-28 px-6 bg-brand-neutral"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-primary mb-6">
            Our Journey
          </h2>
          <p className="text-gray-700 font-body leading-relaxed mb-8">
            From our humble beginnings as a small production team to becoming a
            full-service creative studio, ChannelWerkz has grown through trust,
            innovation, and craftsmanship.
          </p>
          <p className="text-gray-700 font-body leading-relaxed mb-6">
            Over the years, we’ve built partnerships with leading brands across
            retail, finance, hospitality, and government sectors — delivering
            work that not only meets objectives but elevates expectations.
          </p>
          <p className="text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
            What hasn’t changed is our belief that great design and flawless
            execution should always go hand in hand.
          </p>
        </div>
      </motion.section>

      {/* === CTA FOOTER === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-white py-24 rounded-3xl shadow-inner mx-4 mt-16"
      >
        <h2 className="text-3xl font-heading font-bold text-brand-primary mb-4">
          Let’s Bring Ideas to Life
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-body">
          Partner with us to transform your vision into experiences that connect
          with people and drive real impact.
        </p>
        <a
          href="/contact"
          className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
        >
          Start a Project
        </a>
      </motion.section>
    </main>
  );
}
