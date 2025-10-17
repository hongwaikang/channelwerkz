export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-brand-neutral text-brand-primary pt-16 pb-20 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-accent/30 via-brand-secondary/20 to-brand-neutral"></div>

      {/* Hero content */}
      <section className="text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
          <span className="text-brand-primary">Integrated Marketing,</span>{" "}
          <span className="text-brand-accent">Creative Displays,</span>{" "}
          and <span className="text-brand-secondary">Digital Brilliance</span>
        </h1>

        <p className="text-lg md:text-xl text-brand-dark font-body mb-8">
          ChannelWerkz connects creativity with technology to deliver seamless
          marketing experiences that inspire engagement and trust.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/portfolio"
            className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
          >
            See Our Work
          </a>
          <a
            href="/contact"
            className="border border-brand-primary text-brand-primary px-6 py-3 rounded-md font-medium hover:bg-brand-primary hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Ambient color glows */}
      <div className="absolute w-96 h-96 bg-brand-secondary/20 blur-3xl rounded-full top-10 left-[-10%] -z-20"></div>
      <div className="absolute w-96 h-96 bg-brand-accent/25 blur-3xl rounded-full bottom-0 right-[-10%] -z-20"></div>

      {/* Soft gradient divider */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none"></div>

      {/* Intro / Overview Section */}
      <section className="w-full bg-white py-20 px-6 text-center mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-6">
            ChannelWerkz at a Glance
          </h2>
          <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
            We are a multidisciplinary creative production house based in Singapore —
            combining design, fabrication, and technology to deliver end-to-end
            marketing solutions that connect brands with people.
          </p>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            From booth design and event setup to printing, digital displays, and
            premium gifting, ChannelWerkz turns ideas into immersive brand
            experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
