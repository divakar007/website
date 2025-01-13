/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Define the files Tailwind should scan
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s infinite", // Custom animation for slower bouncing
      },
    },
  },
  plugins: [], // Add plugins here if needed
};
