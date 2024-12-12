export default {
  content: [
    "./index.html",
    "./src/*/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      height: {
        '100px': '100px',
        '120px': '120px',
      },
      colors:{
        'primary': '#ef4444', // Your custom color
      },
    }
  },
  plugins: [],
}
