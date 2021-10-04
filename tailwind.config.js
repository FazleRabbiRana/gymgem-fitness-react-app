module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      'center': true,
      'padding': '1rem',
    },
    extend: {
      fontFamily: {
        'title': ['Josefin Sans'],
        'body': ['Montserrat'],
      },
      colors: {
        'my-primary': '#F63C25',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
