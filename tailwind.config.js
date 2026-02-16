export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e73df",
        sidebar: "#1f2d3d"
      },
       fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
