/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vipNavy: "#1B263B",
        vipGoldDark: "#BFA37E",
        vipGoldLight: "#E0E1DD",
        vipPlatinum: "#FFFFFF"
      },
      fontFamily: {
        // We'll use a standard serif/sans or generic Arabic supportive font
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
