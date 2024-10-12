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
        'sidebarlx': '20% 1fr',
        'sidebar': '1fr',
      },
      gridTemplateRows:{
        'headerlx': '6% 1fr',
        'header': '6% 1fr'
      }
    },
  },
  plugins: [],
};
export default config;
