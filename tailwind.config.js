module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e7e5e4",
        primaryHover: "#FFF683",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      animation: {
        bounce: "bounce 3s ease-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
