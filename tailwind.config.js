/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // Base dark colors
        gray: {
          100: "#F3F4F6", // Primary Text
          400: "#9CA3AF", // Secondary Text
          500: "#6B7280", // Muted Text
          600: "#333A45",
          700: "#374151", // Accent Background
          // 800: "#1F2937", // Card Background
          800: "#23272E",
          // 900: "#111827", // Main Background
          900: "#282C34",
        },
        blue: {
          500: "#3B82F6", // Electric Blue
          600: "#2563EB", // Hover State
        },
        green: {
          400: "#4ADE80", // Neon Green
          500: "#22C55E", // Darker Green
        },
        purple: {
          500: "#8B5CF6", // Vivid Purple
        },
        transparent: "transparent", // Keep transparent for utility
        black: "#000000",
        white: "#FFFFFF",
        dark: "#1C1F25",
        btn: "#58C4DC",
      },
      extend: {
        borderColor: {
          DEFAULT: "#374151", // Default border color
        },
      },
    },
  },
  plugins: [],
};
