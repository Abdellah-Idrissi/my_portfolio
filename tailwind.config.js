/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        clash: "var(--clashDisplay)",
        general: "var(--generalSans)",
      },
      colors: {
        main: "#111111",
      },
      backgroundImage: {
        heroBg: "url('/mainbg.webp')",
      },
      screens: {
        ssm: "400px",
        xsm: "500px",
        xsm2: "550px",
        m6: "600px",
        m7: "700px",
        m8: "840px",
        mmd: "900px",
        m9: "980px",
        llg: "1085px",
        m1: "1100px",
        m17: "1170px",
        lllg: "1190px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
