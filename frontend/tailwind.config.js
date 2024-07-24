/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': '360px',
      'xs': '480px',
      'sm': '645px',
      'log': '990px',
      'bmd': '930px',
      'xxmd': '890px',
      'xmd': '815px',
      'lmd': '798px',
      'md': '768px',
      'lg': '1024px',
      'xlg': '1040px',
      'xl': '1280px',
      '2xl': '1536px',
      'ag': '1440px'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
