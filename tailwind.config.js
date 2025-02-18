/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        main : "#1abc9c" ,
        second : "#2c3e50" ,
        third : "#1a252f"
      }
    }
  },
  plugins: ["flowbite/plugin"],
}





