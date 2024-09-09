import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["DM Sans", "sans-serif"],
        header: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#008DDA",
        background: "#EEE0C9",
        accent: "#FF6F61",
        "dark-primary": "#6A62E0",
        "dark-background": "#2F2E43",
        "dark-accent": "#888888",
      },
      animation: {
        slide: "slide 15s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-mask":
          "linear-gradient(90deg, transparent, #FF6F61 20%, #FF6F61 80%, transparent)",
      },
      maxWidth: {
        "screen-lg": "62.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
