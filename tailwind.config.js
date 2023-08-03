/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        sm: "510px",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        dark: "var(--dark)",
      },
    },
  },
  plugins: [],
};
