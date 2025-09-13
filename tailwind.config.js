/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ED4609",
        "light-2": "#4B4B4B",
        light: "#7E7E7E",
        grey: "#F3F1EE",
        "light-3": "#F7F7F7",
      },
      fontFamily: {
        instrument: ["var(--font-instrument-sans)"],
        canelaTrail: ["var(--font-canela-trail)"],
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        ".contain": {
          "@apply container max-w-7xl mx-auto px-4 md:px-6": {},
        },
        ".title_text": {
          "@apply font-canelaTrail text-5xl lg:text-7xl font-light leading-[56px] lg:leading-[72px]":
            {},
        },
        ".title_text_2": {
          "@apply font-canelaTrail text-5xl lg:text-6xl font-light leading-[56px] lg:leading-[72px]":
            {},
        },
        ".brh": {
          "@apply hidden md:block": {},
        },
      };
      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
