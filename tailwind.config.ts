import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#f9fafb", // Light background color (light gray)
        foreground: "#111827", // Dark foreground color (almost black)
        card: {
          DEFAULT: "#ffffff", // Default card background color (white)
          foreground: "#000000", // Card text color (black)
        },
        popover: {
          DEFAULT: "#ffffff", // Popover background color (white)
          foreground: "#000000", // Popover text color (black)
        },
        primary: {
          DEFAULT: "#3b82f6", // Primary color (blue)
          foreground: "#ffffff", // Primary text color (white)
        },
        secondary: {
          DEFAULT: "#fbbf24", // Secondary color (yellow)
          foreground: "#000000", // Secondary text color (black)
        },
        muted: {
          DEFAULT: "#d1d5db", // Muted color (light gray)
          foreground: "#000000", // Muted text color (black)
        },
        accent: {
          DEFAULT: "#f472b6", // Accent color (pink)
          foreground: "#ffffff", // Accent text color (white)
        },
        destructive: {
          DEFAULT: "#ef4444", // Destructive action color (red)
          foreground: "#ffffff", // Destructive text color (white)
        },
        border: "#e5e7eb", // Border color (light gray)
        input: "#ffffff", // Input background color (white)
        ring: "#3b82f6", // Ring color (blue)
        chart: {
          "1": "#3b82f6", // Chart color 1 (blue)
          "2": "#fbbf24", // Chart color 2 (yellow)
          "3": "#ef4444", // Chart color 3 (red)
          "4": "#34d399", // Chart color 4 (green)
          "5": "#f472b6", // Chart color 5 (pink)
        },
        beautiful: {
          primary: "#00ff99",
        },
      },
    },
  },
  plugins: [flowbite, require("tailwindcss-animate")],
} satisfies Config;
