import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marca confirmada pela logo (design-guide) + dourado discreto (MASTER §6)
        navy: {
          DEFAULT: "#192A52",
          900: "#0F1D3C",
          700: "#1E4F8C",
        },
        brand: {
          blue: "#2B4A8A",
          gold: "#C7A35D",
        },
        ink: "#1A1A2E",
        muted: "#4A5568",
        soft: "#F4F7FB",
        line: "#E2E8F0",
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5A",
        },
        // Acentos temáticos (MASTER §6.2)
        health: { soft: "#EAF2FF", accent: "#1E4F8C" },
        reajuste: { soft: "#FCE8E8", accent: "#E05252" },
        woman: { soft: "#F7EAF2", accent: "#9B3E6D" },
        lgbt: { soft: "#F1F4FF", accent: "#6D5DF6" },
        succession: { soft: "#F5F1E8", accent: "#C7A35D" },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,39,71,0.06), 0 8px 24px rgba(15,39,71,0.06)",
        "card-hover": "0 4px 12px rgba(15,39,71,0.10), 0 16px 40px rgba(15,39,71,0.10)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;