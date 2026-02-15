/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1A1310',
          light: '#2C2420',
          dark: '#0F0B09',
          mid: '#221B17',
        },
        flame: {
          DEFAULT: '#E8750A',
          light: '#F59E0B',
          dark: '#C2610A',
          50: '#FEF7ED',
          100: '#FDEBD0',
          200: '#FCDAA5',
        },
        cream: {
          DEFAULT: '#FDF6EC',
          light: '#FFFCF7',
          dark: '#F5E6D0',
        },
        paprika: {
          DEFAULT: '#C93C20',
          light: '#E04830',
          dark: '#A13018',
        },
        herb: {
          DEFAULT: '#4D7C0F',
          light: '#65A30D',
          dark: '#3F6212',
        },
      },
      fontFamily: {
        heading: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 50px -12px rgba(0, 0, 0, 0.2)',
        'glow-flame': '0 0 25px rgba(232, 117, 10, 0.35)',
        'glow-paprika': '0 0 25px rgba(201, 60, 32, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'steam': 'steam 3s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(232, 117, 10, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(232, 117, 10, 0.45)' },
        },
        steam: {
          '0%': { opacity: '0.4', transform: 'translateY(0) scaleX(1)' },
          '50%': { opacity: '0.2', transform: 'translateY(-15px) scaleX(1.2)' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scaleX(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
