/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Berkshire Hathaway HomeServices 2023 Traditional / Luxury Collection
         * palettes (Brand Book): Cabernet + White primary; Espresso/Earth/Dove/Pearl
         * secondary; Rosé/Blush accent. Cream from the heritage luxury yard-sign mix.
         */
        cabernet: {
          DEFAULT: "#670038",
          dark: "#4A0028",
          light: "#8A2454",
        },
        espresso: "#2A2223",
        earth: "#72595E",
        dove: "#AA979C",
        pearl: "#F5F1F2",
        rose: "#ECE3E5",
        blush: "#C299AF",
        cream: "#EAE3D4",
        primary: "#670038",
      },
    },
  },
  plugins: [],
};
