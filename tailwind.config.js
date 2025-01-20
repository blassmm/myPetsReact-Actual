/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      },
      maxWidth: {
        '40rem': '40rem',
      },
      screens: {
        xs: "360px",
        "2xs": "400px",
        sm: "500px",
        "2sm": "640px",
        md: "728px",
        '2md': "900px",
        '3md': "1070px",
        lg: "1190px",
        "2lg": "1300px",
        xl: "1440px",
        "2xl": "1500px",
        "3xl": "1670px",
      },
    },
  },
  plugins: [],
}