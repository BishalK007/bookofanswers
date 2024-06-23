import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      height: {
        'screen-vh': 'calc(var(--vh) * 100)', // Custom height using the CSS variable
      },
      clipPath: {
        'diamond': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      },
      fontFamily: {
        'medival' : [ 'MedievalSharp', 'cursive']
      },
      colors: {
        customBrown: '#2C120C',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.clip-diamond': {
          'clip-path': 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config

export default config