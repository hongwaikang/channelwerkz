"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-brand-neutral text-brand-dark pt-20 pb-16 px-6">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
          We’d love to hear from you. Whether it’s a project inquiry, collaboration, or
          general question — reach out to ChannelWerkz today.
        </p>
      </motion.section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* === Left: Contact Info === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-4">
            Contact Information
          </h2>
          <div className="flex items-start gap-4">
            <MapPin className="text-brand-accent w-6 h-6 mt-1" />
            <p className="text-gray-700">
              ChannelWerkz Pte Ltd <br />
              123 Creative Avenue <br />
              Singapore 567890
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-brand-accent w-6 h-6" />
            <a href="tel:+6565551234" className="text-gray-700 hover:text-brand-accent transition">
              +65 6555 1234
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-brand-accent w-6 h-6" />
            <a
              href="mailto:enquiries@channelwerkz.com"
              className="text-gray-700 hover:text-brand-accent transition"
            >
              enquiries@channelwerkz.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Business Hours: <br />
            Monday – Friday, 9:00 AM – 6:00 PM
          </p>
        </motion.div>

        {/* === Right: Contact Form === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
        >
          <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-brand-accent focus:ring-brand-accent outline-none"
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
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

      {/* === Google Map Section === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-20"
      >
        <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-6 text-center">
          Find Us
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="ChannelWerkz Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7952112355063!2d103.85195911533118!3d1.2902709990571092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a3b1b7b5b1%3A0x63e182d23800c6b8!2sMarina%20Bay%20Sands!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          ChannelWerkz Pte Ltd — located in the heart of Singapore’s creative district.
        </p>
      </motion.section>
    </main>
  );
}
