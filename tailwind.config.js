/** @type {import('tailwindcss').Config} */

const columns = {
  2: "repeat(2, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  8: "repeat(8, minmax(0, 1fr))",
  10: "repeat(10, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))",
}

module.exports = {
  theme: {
    columns,
  },
  safelist: Object.keys(columns).map((key) => `grid-cols-${key}`)
}
