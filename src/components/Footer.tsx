export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-neutral py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-body text-sm md:text-base mb-3">
          © {new Date().getFullYear()} <span className="font-semibold">ChannelWerkz</span>. All rights reserved.
        </p>
        <p className="text-brand-secondary text-sm">
          Integrated Marketing • Printing • Digital Displays
        </p>
      </div>
    </footer>
  );
}
