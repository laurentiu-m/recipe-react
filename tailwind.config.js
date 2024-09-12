/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#262522",
        white: "#F0EBE1",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
