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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        cardBackground: 'linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)',
        cardHover: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
      },
      boxShadow: {
        'card': '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'pulse': 'pulse 2s infinite',
        'glow': 'glow 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 0, 255, 0.8)' },
          '50%': { textShadow: '0 0 20px rgba(255, 0, 255, 1)' },
          '100%': { textShadow: '0 0 5px rgba(255, 0, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
