module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class' 
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['active'],
      scale: ['active'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
