/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#4A2700',
          800: '#643512',
          700: '#753D16',
          600: '#874A1F',
          500: '#9F5F2F',
          400: '#B77C4F',
          300: '#C99A78',
        },
        cream: {
          900: '#B19173',
          800: '#C0A088',
          700: '#CFB097',
          600: '#D0B8A0',
          500: '#DDCAB7',
          400: '#E5D8C8',
          300: '#F2E8DD',
          200: '#F7F0E8',
          100: '#FAF6F0',
        }
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Source Sans 3"', 'sans-serif'],
      },
      backgroundImage: {
        'cookie-pattern': "url('https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
};