"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for background transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.3)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(8px)",
        boxShadow: isScrolled
          ? "0 2px 8px rgba(0,0,0,0.05)"
          : "0 1px 2px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-brand-accent/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* === Logo + Brand === */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="ChannelWerkz logo"
            width={38}
            height={38}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="text-2xl font-serif font-normal text-brand-primary tracking-tight">
            ChannelWerkz Pte Ltd
          </span>
        </Link>

        {/* === Desktop Links === */}
        <div className="hidden md:flex gap-6 font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-brand-accent"
                      : "text-brand-dark hover:text-brand-accent"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-[3px] h-[2px] bg-brand-accent rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* === Mobile Toggle === */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brand-primary focus:outline-none text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="md:hidden flex flex-col items-center gap-4 bg-white/90 pb-4 shadow-md backdrop-blur-md"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium transition ${
                  isActive
                    ? "text-brand-accent"
                    : "text-brand-dark hover:text-brand-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
