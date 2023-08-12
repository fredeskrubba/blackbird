/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slideLeftIn': 'slideLeftIn 500ms ease-in',
        'slideLeftOut': 'slideLeftOut 500ms ease-out',
      },
    },
    colors: {
      'trans-dark': '#1E1E1ECC',
      "bronze": "#CD7F32",
      "dark": "#1E1E1E",
      "light": "#f5f5f5"
    },
    fontFamily: {
      caveat: ['Caveat', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
