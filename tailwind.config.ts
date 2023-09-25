import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: 'rgb(var(--brand) / <alpha-value>)',
        gray1: 'rgb(var(--gray-1) / <alpha-value>)',
        gray2: 'rgb(var(--gray-2) / <alpha-value>)',
        gray3: 'rgb(var(--gray-3) / <alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
