/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'tailor-blue': '#264BEB',
        'tailor-gray': '#F1F1F0',
        'tailor-purple': '#8DA0F0'
      }
    },
  },
  plugins: [],
};
