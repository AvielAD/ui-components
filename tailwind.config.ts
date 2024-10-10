import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'sidebar': '15% 1fr'
      },
      gridTemplateRows:{
        'header': '6% 1fr'
      }
    },
  },
  plugins: [],
};
export default config;
