import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0B083E',
                slate: '#F7F7F9',
                white: '#FFFFFF',
                gray: '#8B8BA2',
            }
        },
    },
    plugins: [],
}

export default config