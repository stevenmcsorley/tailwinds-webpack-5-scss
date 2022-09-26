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
