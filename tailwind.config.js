// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Example primary color (replace with actual color from the reference site)
        secondary: "#ef4444", // Example secondary color (replace with actual color)
        accent: "#10b981", // Example accent color (replace with actual color)
        background: "#f3f4f6", // Example background color (replace with actual color)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example font (replace with actual font)
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },
      spacing: {
        128: "32rem", // Custom spacing values
        144: "36rem",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.2)",
      },
      fontSize: {
        xxs: "0.65rem",
        xxl: "2rem",
      },
    },
  },
  plugins: [
    //require("@tailwindcss/forms"),
    //require("@tailwindcss/typography"),
    //require("@tailwindcss/aspect-ratio"),
  ],
};
