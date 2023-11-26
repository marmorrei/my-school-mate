/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui', '@tailwindcss/forms')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#542C2C',
          secondary: '#E86C44',
          accent: '#058F84',
          info: '#F9D767',
          neutral: '#BED7DC',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
