/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
   fontSize: {
    "mm":"14px"
      },
  height:{
    "h1":"60vh"
  },
  borderColor:{
    "black":"	#989898"
  }
    },
  

  },
  plugins: [],
}
