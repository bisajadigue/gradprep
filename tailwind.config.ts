import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6d00f9",
        secondary: "#eae7fb",
      },
      fontFamily: {
        jakarta: "jakarta",
      },
    },
  },
  plugins: [],
} satisfies Config;
