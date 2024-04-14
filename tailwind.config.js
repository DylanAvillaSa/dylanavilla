/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#222831",
        "bg-green": "#00ADB5",
        "bg-white": "#EEEEEE",
        "bg-black": "#393E46",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
