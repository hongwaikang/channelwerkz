import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // ← add this
import type { ReactNode } from "react";

export const metadata = {
  title: "ChannelWerkz",
  description: "Integrated marketing, printing, and digital display solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16 flex flex-col min-h-screen bg-brand-neutral text-brand-dark font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
