module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] }, // files which is scanned to optimizing
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { // <-- add custom colors
        primery: '#FF6363',
        secondary: {
          100: '#E2EED5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Nunito'] // <-- add custom font
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
