/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontSize: {
        "4xl": ["44px", "48px"],
      },
      fontFamily: {
        sans: ["century-gothic", "sans-serif"],
        serif: ["p22-mackinac-pro", "serif"],
      },
    },
  },
  plugins: [],
};
