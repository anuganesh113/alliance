/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003B5C', // Logo Blue
          light: '#005482',
          dark: '#00263D',
        },
        secondary: {
          DEFAULT: '#008744', // Logo Green
          light: '#00A854',
          dark: '#006B36',
        },
        accent: {
          DEFAULT: '#008744', // Also Green for convenience
          light: '#00A854',
          dark: '#006B36',
        },
        'text-dim': '#64748B', // The old secondary (Slate)
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
