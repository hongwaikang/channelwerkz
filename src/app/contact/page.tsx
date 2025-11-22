"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-brand-neutral via-white to-brand-neutral text-brand-dark pt-20 pb-24 px-6 overflow-hidden">
      {/* === Background Glows === */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-brand-accent/15 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-brand-secondary/15 blur-3xl rounded-full -z-10" />

      {/* === Header === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
          We’d love to hear from you. Whether it’s a project inquiry,
          collaboration, or general question — connect with our team today.
        </p>
      </motion.section>

      {/* === 2-COLUMN CONTACT SECTION === */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* === LEFT: CONTACT INFORMATION CARD === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-brand-accent/10"
        >
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-brand-accent/10 blur-3xl rounded-full -z-10" />

          <h2 className="text-3xl font-heading font-semibold text-brand-primary mb-6">
            Contact Information
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4 group">
            <MapPin className="text-brand-accent w-7 h-7 mt-1 group-hover:scale-110 group-hover:text-brand-primary transition" />
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-brand-primary">ChannelWerkz Pte Ltd</span>
              <br />
              362 Upper Paya Lebar Road #06-03 <br />
              Da Jin Factory Building <br />
              Singapore 534963
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 group">
            <Phone className="text-brand-accent w-7 h-7 group-hover:scale-110 group-hover:text-brand-primary transition" />
            <p className="text-gray-700">
              <a href="tel:+6568164174" className="hover:text-brand-accent transition">+65 6816 4174</a>{" "}
              /{" "}
              <a href="tel:+6580442909" className="hover:text-brand-accent transition">+65 8044 2909</a>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <Mail className="text-brand-accent w-7 h-7 group-hover:scale-110 group-hover:text-brand-primary transition" />
            <a
              href="mailto:enquiries@channelwerkz.com.sg"
              className="text-gray-700 hover:text-brand-accent transition"
            >
              enquiries@channelwerkz.com.sg
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Business Hours: <br />
            Monday – Friday, 9:00 AM – 6:00 PM
          </p>
        </motion.div>

        {/* === RIGHT: WHATSAPP DIRECT CONTACT BOX === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-brand-accent/10 flex flex-col items-center text-center"
        >
          <MessageCircle className="w-12 h-12 text-brand-accent mb-4" />

          <h3 className="text-2xl font-heading font-semibold text-brand-primary mb-3">
            WhatsApp Us
          </h3>

          <p className="text-gray-700 mb-6 max-w-sm">
            Prefer quick messaging? Chat with our team directly on WhatsApp for faster responses.
          </p>

          <a
            href="https://wa.me/6580442909"
            target="_blank"
            className="bg-[#25D366] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition hover:bg-[#1EBE5A]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-brand-secondary/10 blur-3xl rounded-full -z-10" />
        </motion.div>
      </section>

      {/* === CTA SECTION (unchanged) === */}
      <section className="relative w-full py-20 mt-24 bg-white text-center text-brand-primary overflow-hidden border-t border-brand-accent/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let’s Work Together</h2>
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

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-accent/10 blur-3xl rounded-full -z-10" />
      </section>

      {/* === GOOGLE MAP SECTION === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-12 bg-white text-brand-dark"
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
