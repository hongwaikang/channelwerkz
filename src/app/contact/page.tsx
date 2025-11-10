"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-brand-neutral via-white to-brand-neutral text-brand-dark pt-20 pb-24 px-6 overflow-hidden">
      {/* === Background Glows === */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-brand-accent/15 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-brand-secondary/15 blur-3xl rounded-full -z-10" />

      {/* === Header === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
          We’d love to hear from you. Whether it’s a project inquiry, collaboration,
          or general question — connect with our team today.
        </p>
      </motion.section>

      {/* === Contact Section === */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="space-y-6 relative"
        >
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-brand-accent/10 blur-3xl rounded-full -z-10" />
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-4">
            Contact Information
          </h2>

          <div className="flex items-start gap-4 group">
            <MapPin className="text-brand-accent w-6 h-6 mt-1 group-hover:scale-110 group-hover:text-brand-primary transition" />
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-brand-primary">ChannelWerkz Pte Ltd</span>
              <br />
              362 Upper Paya Lebar Road #06-03 <br />
              Da Jin Factory Building <br />
              Singapore 534963
            </p>
          </div>

          <div className="flex items-center gap-4 group">
            <Phone className="text-brand-accent w-6 h-6 group-hover:scale-110 group-hover:text-brand-primary transition" />
            <p className="text-gray-700">
              <a href="tel:+6568164174" className="hover:text-brand-accent transition">
                +65 6816 4174
              </a>{" "}
              /{" "}
              <a href="tel:+6580442909" className="hover:text-brand-accent transition">
                +65 8044 2909
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 group">
            <Mail className="text-brand-accent w-6 h-6 group-hover:scale-110 group-hover:text-brand-primary transition" />
            <a
              href="mailto:enquiries@channelwerkz.com.sg"
              className="text-gray-700 hover:text-brand-accent transition"
            >
              enquiries@channelwerkz.com.sg
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Business Hours: <br />
            Monday – Friday, 9:00 AM – 6:00 PM
          </p>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-brand-accent/10 hover:shadow-xl transition"
        >
          <div className="absolute -top-16 right-0 w-72 h-72 bg-brand-secondary/10 blur-3xl rounded-full -z-10" />
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-6 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-brand-accent focus:ring-brand-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-brand-accent focus:ring-brand-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-brand-accent focus:ring-brand-accent outline-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full bg-gradient-to-r from-brand-accent to-brand-secondary text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition"
            >
              Send Message
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-sm font-medium text-center mt-3"
              >
                ✅ Message sent successfully! (simulation)
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>

      {/* === Gradient Divider into CTA === */}
      <div className="w-full h-32 mt-24 bg-gradient-to-b from-transparent via-brand-accent/10 to-brand-neutral" />

      {/* === CTA Banner === */}
      <section className="relative w-full py-24 bg-gradient-to-br from-brand-neutral via-white to-brand-accent/10 text-center text-brand-primary overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let’s Work Together
          </h2>
          <p className="text-lg md:text-xl font-body mb-8 opacity-90 text-brand-dark">
            Ready to bring your next campaign, display, or event to life?  
            We’re here to make your brand shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:enquiries@channelwerkz.com.sg"
              className="bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-primary transition"
            >
              Start a Conversation
            </a>
            <Link
              href="/portfolio"
              className="border border-brand-primary text-brand-primary px-6 py-3 rounded-md font-medium hover:bg-brand-primary hover:text-white transition"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Glow Accents */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-accent/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/20 blur-3xl rounded-full" />
      </section>

      {/* === Gradient Divider into Map === */}
      <div className="w-full h-24 bg-gradient-to-b from-transparent via-brand-accent/10 to-brand-neutral" />

      {/* === Google Map Section === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-10"
      >
        <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-6 text-center">
          Find Us
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="ChannelWerkz Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7141194627907!2d103.87869067451622!3d1.3480162615826814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17bcef3fffff%3A0xcb3bd0f8774bfa01!2sChannelwerkz!5e0!3m2!1sen!2ssg!4v1761760047024!5m2!1sen!2ssg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          ChannelWerkz Pte Ltd — located at Da Jin Factory Building, Singapore.
        </p>
      </motion.section>
    </main>
  );
}
