/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      }, colors: {
        lightBlue: '#87CEEB',
        blue: '#b44f43',
        green: '#228B22',
        brown: '#8B4513',         // Primary colors
        white: '#F5F5DC',        // white section
        danger: '#FF0000',       // Red for danger
        moderate: '#FFA500',     // Orange for moderate
        safe: '#008000',         // Green for safe
      },
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Montserrat', 'Quicksand', 'Roboto', 'sans'],
      },
    },
  },
  plugins: [],
}

