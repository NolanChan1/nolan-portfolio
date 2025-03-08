/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      black: "#000000",
      "light-black": {
        900: "#111111",
        850: "#1c1c1c",
        825: "#242424",
        800: "#292929",
        100: "#e7e7e7",
      },
      "light-red": "#df2935",
      "dark-white": {
        100: "#f0f0f0",
        300: "#b0b0b0",
      },
      "off-black": {
        900: "#040f16",
        800: "#1d272d",
        600: "#4f575c",
      },
      "off-white": {
        100: "#fffffc",
        800: "#333332",
        900: "#191919",
      },
      white: "#ffffff",
      dev: "#17da74",
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      raleway: ["var(--font-raleway)"],
    },
    extend: {
      fontSize: {
        "3.5xl": "2rem",
        "2xs": "0.6875rem",
        "3xs": "0.625rem",
        "4xs": "0.5rem",
      },
      padding: {
        0.5: "0.125rem",
        1.25: "0.3125rem",
      },
    },
  },
  plugins: [],
};
