"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-neutral/80 backdrop-blur-md shadow-sm border-b border-brand-accent/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-heading font-bold text-brand-primary">
          ChannelWerkz
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-brand-dark font-medium">
          <Link href="/about" className="hover:text-brand-accent transition">About</Link>
          <Link href="/services" className="hover:text-brand-accent transition">Services</Link>
          <Link href="/portfolio" className="hover:text-brand-accent transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-brand-accent transition">Contact</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-brand-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-brand-neutral pb-4 shadow-md">
          <Link href="/about" className="text-brand-dark hover:text-brand-accent transition">About</Link>
          <Link href="/services" className="text-brand-dark hover:text-brand-accent transition">Services</Link>
          <Link href="/portfolio" className="text-brand-dark hover:text-brand-accent transition">Portfolio</Link>
          <Link href="/contact" className="text-brand-dark hover:text-brand-accent transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
