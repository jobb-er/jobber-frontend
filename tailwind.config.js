/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "5xl": "5rem",
      },
      dropShadow: {
        DEFAULT: "0 15px 10px rgba(0, 0, 0, 0.25)",
      },
      minWidth: {
        48: "12rem",
        "4/12": "33.333333%",
      },
      height: {
        85: "80vh",
      },
      fontSize: {
        "msg-conv-list-title": ["1.25rem", "1.5rem"],
        "msg-conv-list-msg": ["1rem", "1.25rem"],
        "msg-conv-title": ["2rem", "2.5rem"],
        "msg-conv-msg": ["1.25rem", "1.5rem"],
        "msg-conv-msg-inp": ["1.5rem", "1.75rem"],
      },
    },
    colors: {
      primary: {
        DEFAULT: "#2C3246",
      },
      secondary: {
        dark: "#999999",
        DEFAULT: "#9195A0",
        light: "#D9D9D9",
        lightest: "#EEEEEE",
      },
      action: {
        DEFAULT: "#50A8EA",
      },
      error: {
        DEFAULT: "#FF7272",
      },
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
