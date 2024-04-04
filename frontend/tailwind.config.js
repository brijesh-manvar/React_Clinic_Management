module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: {
          300: "#64bef1",
          900: "#0015d3",
          "300_7a": "#64bff27a",
          "300_23": "#64bef123",
          "300_68": "#64bef168",
          "300_0c": "#64bef10c",
        },
        blue_gray: { 100: "#d9d9d9" },
        black: {
          900: "#000000",
          "900_7a": "#0000007a",
          "900_71": "#00000071",
          "900_84": "#00000084",
          "900_68": "#00000068",
        },
        light_blue: { 700: "#008bd9" },
        indigo: { "900_cc": "#07295ccc" },
        deep_orange: { 300: "#ff8863", 800: "#d53d0d" },
        cyan: { 50: "#d6f7ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
