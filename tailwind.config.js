/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#262522",
        white: "#F0EBE1",
        primaryColor1: "#9FDC26",
        primaryColor2: "#F29C33",
        primaryColor3: "#EE6352",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
