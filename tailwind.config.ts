import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6d00f9",
        secondary: "#eae7fb",
        purple: "#6E00FA",
        lightpurple: "#F5E8FF",
        green: "#66D63F",

      },
      fontFamily: {
        jakarta: "jakarta",
      },
    },
  },
  plugins: [],
} satisfies Config;
