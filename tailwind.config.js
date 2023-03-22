/** @type {import('tailwindcss').Config} */

const columns = {
  4: "repeat(4, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))",
  10: "repeat(10, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))",
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    columns,
    extend: {},
  },
  safelist: Object.keys(columns).map((key) => `grid-cols-${key}`),
  plugins: [],
}
