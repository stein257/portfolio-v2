/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background: "#0F111A",
        stroke: "#EEFFFF",
        ["secondary-stroke"]: "#C6D2D2",
      },
      fontFamily: {
        cursive: ["Fuzzy Bubbles", "cursive"],
      },
    },
  },
};
