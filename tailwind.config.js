/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        'gold-dark': '#B8860B',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
