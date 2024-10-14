import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

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
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      primary: colors.blue,
      secondary: colors.gray,
      warning: colors.orange,
      danger: colors.red,
      success: colors.green,
      theme1: colors.purple,
      theme2: colors.indigo,
      theme3: colors.purple,
      theme4: colors.red,
      theme5: colors.orange
    }
  },
  plugins: [],
};
export default config;
