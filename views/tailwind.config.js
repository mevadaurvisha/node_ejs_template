/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html','./dist/page/*'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Poppins"'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['"Lobster"'],
      'body': ['"Open Sans"'],
    },
  },
  plugins: [],
}