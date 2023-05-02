/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        warm: {
          primary: '#E74646',
          secondary: '#FA9884',
          accent: '#FFE5CA',
          neutral: '#818cf8',
          'base-100': '#f0f0f0',
          info: '#FFF3E2',
          success: '#66E5B0',
          warning: '#facc15',
          error: '#f87171'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
