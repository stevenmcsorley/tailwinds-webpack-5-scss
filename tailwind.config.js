/** @type { import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js, jsx, ts, tsx}"],
  content: ['./dist/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        pink: {
          100: '#FCE7F3',
          200: '#F8BBD0',
          300: '#F48FB1',
          400: '#F06292',
          500: '#EC407A',
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
        green:{
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#66BB6A',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        custom: {
          100: `rgb(var(--color-custom-100))`,
          200: `rgb(var(--color-custom-200))`,
          300: `rgb(var(--color-custom-300))`,
          400: `rgb(var(--color-custom-400))`,
          500: `rgb(var(--color-custom-500))`,
        },
      },
      fontFamily: {
        primary: `var(--font-custom-primary)`,
        secondary: `var(--font-custom-secondary)`,
      }

    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}
