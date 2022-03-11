module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "loader-blue": "#4A90E2",
      },
      width: {
        53: "53px",
        150: "150px",
      },
      height: {
        53: "53px",
        125: "125px",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      spacing: {
        "2/5": "40%",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
