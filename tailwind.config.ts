import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-primary": "#85ffba",
        "green-primary-2":"#c1ffd9",
        "back-primary" : "#212121",
        "black-p":"#212121",
        "yellow-p":"#E9FB78"

      },
      backgroundImage:{
        "custom-g-grad":"linear-gradient(145deg, var(--back-primary) 0%, var(--green-primary-2) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
