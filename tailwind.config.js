/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-blue": "#0077FF",
        "react-blue": "#7cdffe",
        "dark-gray": "#1a1a1a",
        "light-gray": "#a9a9a9",
      },
    }
  },
  plugins: [],
}

