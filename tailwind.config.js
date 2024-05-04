/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Adjust file extensions as needed
    "./android/app/src/screen/*.{js,jsx,ts,tsx}", // Or other component file paths
  ],
  theme: {
    extend: {
      colors: { // Assuming your color definitions remain the same
        'oa-blue': '#0080FF',
        'oa-green': '#0FBD9D',
        'oa-red': '#FC2947',
        'oa-border': '#D1D5DB',
      },
    },
  },
  plugins: [],
};
