module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/moroccan-flower-dark.png')"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
