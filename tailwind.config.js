/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spotlight: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        spotlight: 'spotlight 1s ease-in-out forwards',
      },
      backgroundImage: {
        pagination:
          'url("https://animalworld.com.tr/wp-content/uploads/2022/12/animal-world.jpg")',
        pets: 'url("https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg")',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      background: ' #242424',
      'background-light': '#2c2c2c',
    }),
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
