/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pale-yellow': "hsl(47, 56%, 90%)",
        'soft-blue': "hsl(208, 71%, 24%)"
      }
    },
  },
  plugins: [],
}

