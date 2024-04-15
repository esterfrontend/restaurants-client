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
      },
      backgroundImage: {
        'home': "url('https://res.cloudinary.com/dsywb80za/image/upload/v1712954027/Restaurants/Home_ztnfpj.jpg')",
        'login': "url('https://res.cloudinary.com/dsywb80za/image/upload/v1712954201/Restaurants/Picture_shzy4m.jpg')",
        'signup': "url('https://res.cloudinary.com/dsywb80za/image/upload/v1712954027/Restaurants/Signin_wk08ia.jpg')",
      }
    },
  },
  plugins: [],
};
