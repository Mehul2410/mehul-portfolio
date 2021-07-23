const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layout/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      first: "#F9F7F7",
      second: "#DBE2EF",
      third: "#4072AF",
      fourth: "#122E4F",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      width: {
        img: "320px",
        exp: "830px",
      },
      backgroundImage: (theme) => ({
        curve: "url('/img/curve.svg')",
        "hero-img": "url('/img/mehul.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
