/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cyanShadow: '0px 0px 20px 0px rgba(255, 0, 0, 1)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(255, 0, 0, 1)',
        orangeMediumShadow: '10px 10px 200px 150px rgba(255, 0, 0, 1)',
      },
      fontFamily: {
        roman: ["Luxurious Roman, sans-serif"],
        loto: ['Lato, sa']
      }
    },
  },
  plugins: [],
}