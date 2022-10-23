const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        secular: ["Secular One", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui")],
};
