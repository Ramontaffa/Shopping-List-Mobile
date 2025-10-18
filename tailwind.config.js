/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        purple: {
          light: 'var(--color-purple-light)',
          DEFAULT: 'var(--color-purple)',
          dark: 'var(--color-purple-dark)'
        },
        gray: {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)'
        },
        success: {
          light: 'var(--color-success-light)',
          DEFAULT: 'var(--color-success)'
        },
        pink: 'var(--color-pink)',
        'pink-dark': 'var(--color-pink-dark)',
        orange: 'var(--color-orange)',
        'orange-dark': 'var(--color-orange-dark)',
        yellow: 'var(--color-yellow)',
        'yellow-dark': 'var(--color-yellow-dark)',
        green: 'var(--color-green)',
        'green-dark': 'var(--color-green-dark)',
        blue: 'var(--color-blue)',
        'blue-dark': 'var(--color-blue-dark)'
        ,
        background: 'var(--color-gray-100)',
        foreground: 'var(--color-gray-500)'
      }
    },
  },
  plugins: [],
}