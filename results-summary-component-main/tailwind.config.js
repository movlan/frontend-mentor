/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "light-red-opaque": "hsla(0, 100%, 67%, 0.05)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "orangey-yellow-opaque": "hsla(39, 100%, 56%, 0.05)",
        "green-teal": "hsl(166, 100%, 37%)",
        "green-teal-opaque": "hsla(166, 100%, 37%, 0.05)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "cobalt-blue-opaque": "hsla(234, 85%, 45%, 0.05)",
        white: "hsl(0, 0%, 100%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      backgroundImage: {
        "background-gradient":
          "linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
        "circle-gradient":
          "linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))",
      },
    },
  },
  plugins: [],
};
