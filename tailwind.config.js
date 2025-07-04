/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1220px', // Custom breakpoint
      '2xl': '1536px',
    },
      boxShadow: {
        cyanShadow: '0px 0px 20px 0px rgba(255, 0, 0, 1)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(255, 0, 0, 1)',
        orangeMediumShadow: '10px 10px 200px 150px rgba(255, 0, 0, 1)',
      },
      fontFamily: {
        roman: ["Luxurious Roman, sans-serif"],
        loto: ['Pacifico, cursive'],
        poppins: ['Poppins, sans-serif'],
        luxary: ["Dancing Script, cursive"],
        pera: ["Playfair Display, serif;"],
        summer: ["Bebas Neue, sans-serif"],
        nunito: ["Nunito Sans, sans-serif"],
        mono: ["Libertinus Mono, monospace"]
      }
    },
  },
  plugins: [],
}