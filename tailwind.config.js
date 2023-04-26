/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        app_black: "#211D1E",
        app_white: "#F5F8FA",
        app_gray: "#909FB7",
        app_light: "#BFC8D9",
        app_dark: "#54585F",
        app_primary_dark: "#24BC9E",
        app_primary_light: "#50CEB4",
        app_error: "#EE2B2B",
        app_background: "#2B2627",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
