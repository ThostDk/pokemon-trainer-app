/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /** all files that are in any folder in the source folder that are of extension typescript or of extension html should be included. */
    "./src/**/*.{ts,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
