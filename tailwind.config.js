const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
  themes: ["light", "dark", "cupcake"]
});
