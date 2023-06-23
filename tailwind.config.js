/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "off-white": "#fffffc",
      "off-black": "#040f16",
      "light-red": "#df2935",
      dev: "#17da74",
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      raleway: ["var(--font-raleway)"],
    },
    extend: {
      fontSize: {
        "2xs": "0.6875rem",
        "3xs": "0.625rem",
      },
      padding: {
        1.25: "0.3125rem",
      },
    },
  },
  plugins: [],
};
