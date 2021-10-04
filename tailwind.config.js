module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Josefin Sans'],
        'body': ['Open Sans'],
      },
      colors: {
        'my-primary': '#F63C25',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
