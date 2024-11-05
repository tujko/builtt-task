/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },
      textColor: {
        softDarkGray: "#757575",
        silverDark: "#86969c"
      },
      colors: {
        lightGray: "#f6f6f6",
        softDarkGray: "#757575",
        middleGray: "#969696",
        middleDark: "#808080",
        silverDark: "#86969c",
      }
    },
  },
  plugins: [],
}

