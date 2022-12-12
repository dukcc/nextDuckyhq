const { SERVER_FILES_MANIFEST } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ['"Montserrat Alternates"']
      },
      colors: {
        'logo-1': '#0040fb',
        'logo-2': '#008afc',
        'logo-3': '#fd005f',
      }
    },
  },
  plugins: [],
}