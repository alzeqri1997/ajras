/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        "3xl": '8.375rem'
      }
    },
    extend: {},
    screens: {
        sm: "576px",
        "sm-max": { max: "576px" },
        md: "768px",
        "md-max": { max: "768px" },
        lg: "992px",
        "lg-max": { max: "992px" },
        xl: "1200px",
        "xl-max": { max: "1200px" },
        "2xl": "1320px",
        "2xl-max": { max: "1320px" },
        "3xl": "1400px",
        "3xl-max": { max: "1400px" },
        "4xl": "1600px",
        "4xl-max": { max: "1600px" },
        "5xl": "1850px",
        "5xl-max": { max: "1850px" },
    },
    colors: () => (
      {
        primary: '#0E5458',
        lightPrimary: '#0E5458',
        secondary:'#9ACA3C',
        white: "#ffffff",
      }
    )
  },
  plugins: [],
}