const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ---------- COLORS ---------- */
      colors: {
        // primary: "#E83A15",
        primary: "#3AA833",
        secondary: "#102039",
      },

      /* ---------- CONTAINER ---------- */
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1640px",
        },
      },

      /* ---------- MARQUEE ANIMATION ---------- */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#3AA833",
            },
            secondary: {
              DEFAULT: "#102039",
            },
            background: "#FFFFFF",
          },
        },
      },
    }),
  ],
};
