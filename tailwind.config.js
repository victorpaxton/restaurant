/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-dark": "#212121",
        "my-yellow": "#dcca87",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        titleFont: ["Cormorant Upright", "serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "landing-img1": "url('./img/landing-img1.jpg')",
        "landing-img2": "url('./img/landing-img2.jpg')",
        "bg-footer": "url('./img/bg-footer.png')",
      },
    },
  },
  plugins: [],
};
