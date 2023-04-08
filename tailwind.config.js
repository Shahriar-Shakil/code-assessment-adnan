/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#17201D",
      white: {
        50: "#F2F2F2",
        100: "#FAFAFA",
        900: "#FFFFFF",
      },
      gray: {
        100: "#8B928F",
        200: "#A3A9A7",
      },
      green: { 400: "#5B9982", 100: "#96AEA1" },
      indigo: {
        100: "D3D1F3",
        400: "554FA6",
      },
      red: {
        100: "#FAE8E4",
        400: "#DB2F06",
      },
      yellow: {
        ...colors.yellow,
      },
    },
    fontFamily: {
      display: ["Inter"],
      body: ["Inter", '"sans-serif"'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
