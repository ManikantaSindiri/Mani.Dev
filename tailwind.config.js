/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D32F2F',
        'primary-dark': '#B71C1C',
        dark: {
          bg: '#000000',
          surface: '#111111',
          card: '#1a1a1a',
          border: '#333333',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #D32F2F, 0 0 10px #D32F2F, 0 0 15px #D32F2F' },
          '100%': { boxShadow: '0 0 10px #D32F2F, 0 0 20px #D32F2F, 0 0 30px #D32F2F' },
        }
      }
    },
  },
  plugins: [],
}