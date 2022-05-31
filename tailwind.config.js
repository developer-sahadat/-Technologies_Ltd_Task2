module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0000",

          secondary: "#F3F4F6",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
