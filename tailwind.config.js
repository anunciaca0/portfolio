/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0a0f',
          900: '#0d0d14',
          850: '#13131c',
          800: '#1a1a24',
          700: '#24242f',
          600: '#2f2f3d',
        },
        brand: {
          violet: '#e23b54', // crimson (accent primário)
          cyan: '#4f93e0', // azul aço (accent secundário)
          glow: '#6ea8e6', // azul aço claro (rótulos/headings)
        },
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
