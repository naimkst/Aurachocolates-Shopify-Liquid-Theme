/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        primary: "#EA5329",
        secondary: "#3C1605",
        title: "##3B1408",
        content: "#3F3F3F",
        bg: "#FFF3EF",
      },
      fontFamily: {
        title: ['"Lato"', "sans-serif"],
        content: ['"Lato"', "sans-serif"],
      },
      screens: {
        desktop: { max: "1279px" },
        miniLaptop: { max: "1278px" },
        laptop: { max: "1024px" },
        tablet: { max: "768px" },
        phone: { max: "639px" },
        phone375: { max: "375px" },
        phone320: { max: "320px" },
      },
    },
  },
  plugins: [],
};
