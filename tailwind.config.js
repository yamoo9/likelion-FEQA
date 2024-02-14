/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    // {
    //   pattern: /(bg|text)-(indigo|sky|slate)-(50|[1-9]00|950)/,
    //   variants: ['hover', 'focus'],
    // },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
