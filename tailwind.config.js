/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        softRed: "hsl(10, 79%, 65%)",
        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: " hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
