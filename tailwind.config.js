module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#0FCFEC",
          accent: "#3A4256",
          neutral: "#3d4451",
          white: "#fff",
          "base-100": "#ffffff",
        },
      },
      
      "cupcake",
    ],
  },
}