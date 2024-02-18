/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      DMsans: ["var(--DMsans)"],
    },
    extend: {
      colors: {
        "main-bg-color": "var(--main-bg-color)",
        "secondery-bg-colorr": "var(--secondery-bg-color)",
        "main-font-color": "var(--main-font-color)",
        "secondery-font-color": "var(--secondery-font-color)",
        "tertiary-font-color": "var(--tertiary-font-color)",
      },
    },
  },
  plugins: [],
};
