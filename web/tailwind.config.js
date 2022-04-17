module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#D0AB67",
          400: "#C8AC86",
          600: "#9B8054",
        },
        orange: {
          400: "#F7966B",
        },
        pink: {
          400: "#FCDDD6",
        },
        purple: {
          300: "#B19ACA",
          400: "#8D64AA",
        },
        salmon: {
          400: "#FCD3C1",
        },
        skin: {
          400: "#FCD3C1",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        playfair: ["Playfair"],
        "proxima-nova": ['"Proxima Nova"'],
      },
    },
  },
  plugins: [],
}
