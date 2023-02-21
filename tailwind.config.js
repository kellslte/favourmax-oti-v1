/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icon: "#1469FF",
        base: "#191932",
        line: "#343B41",
        link: "#E3E5E8",
        project: "#1E1E37",
        block: "#51516A",
        rec: "#97A1AB",
        projectColor: "#ADB5BD",
      },
      fontFamily: {
        monument: ["Monument Extended"],
        lato: ["Lato"],
      },
      keyframes: {
        load: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        load: "load 5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        ".text-shadow-sm": {
          "text-shadow":
            "-1px 1px 0px #51516A, 1px 1px 0 #51516A, 1px 1px 0 #51516A, 1px 1px 0 #51516A",
        },
        ".text-shadow-md": {
          "text-shadow":
            "-2px 2px 0px #51516A, 2px 2px 0 #51516A, 2px 2px 0 #51516A, 2px 2px 0 #51516A",
        },
        ".text-shadow-lg": {
          "text-shadow":
            "-4px 4px 0px #51516A, 4px 4px 0 #51516A, 4px 4px 0 #51516A, 4px 4px 0 #51516A",
        },
        ".text-stroke-sm": {
          "-webkit-text-stroke-width": "1.06996px",
          "-webkit-text-stroke-color": "#51516A",
        },
      });

      addComponents({
        ".project-sm": {
          width: "25rem",
          height: "25rem",
          border: "1px solid #97A1AB",
          padding: "1rem 1.5rem",
        },
        ".project-md": {
          width: "30rem",
          height: "23rem",
          boxSizing: "border-box",
          border: "1px solid #97A1AB",
          padding: "2rem 2.5rem",
        },
        ".feature-sm": {
          width: "85vh",
          height: "700px",
        },
        ".feature-md": {
          width: "562px",
          height: "462px",
          boxSizing: "border-box",
        },
      });
    }),
  ],
};
