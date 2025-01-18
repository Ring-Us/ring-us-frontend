/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        red: '#E70000',
        green: '#00AF49',
        primary: '#310EE0',
        secondary: '#7e5bef',
        // 추가적인 색상 정의
      },
      borderRadius: {
        lg: '14px',
        md: '10px',  // 10px - 2px
        sm: '6px',  // 10px - 4px
      },
    },
  },
  plugins: [],
};
