/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '56.25%': '56.25%',
      },
    },
  },
  plugins: [
'@tailwindcss/line-clamp',
  ],
}

