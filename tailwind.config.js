/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F172A",   // Deep navy (text, brand strength)
          accent: "#2563EB",    // Vibrant blue (buttons, highlights)
          secondary: "#06B6D4", // Electric cyan (creative spark)
          neutral: "#F9FAFB",   // Soft white (background)
          dark: "#1E293B",      // Charcoal (body text)
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
