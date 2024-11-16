import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        KaushanScripts: ['"KaushanScript-Regular"', 'sans-serif'],
        MontserratBold: ['"Montserrat-Bold"', 'sans-serif'],
        MontserratRegular: ['"Montserrat-Regular"', 'sans-serif'],
        RobotoLightItalic: ['"Roboto-LightItalic"', 'sans-serif'],
        RobotoRegular: ['"Roboto-Regular"', 'sans-serif'],
      },
      screens: {
        sm: '320px',
        md: '650px',
        lg: '800px',
        xl: '1000px',
      },
      backgroundImage: {
        introBg: "url('/image/intro/intro-bg.webp')",
        featureBg: "url('/image/feature/feature-bg.webp')",
        sayBg: "url('/image/say/say-bg.webp')",
        mapBg: "url('/image/map/map-bg.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
