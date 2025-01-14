import type { Config } from "tailwindcss";

export default {
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
      },
    },
    screens: {
      mobile: { max: "600px" },
      tablet: { min: "601px", max: "1024px" },
      lg: { min: "1025px" },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    
    

  ],
} satisfies Config;
