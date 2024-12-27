// const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
    // flowbite.content(),
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // require('flowbite/plugin'),
    // flowbite.plugin(),
  ],
}

