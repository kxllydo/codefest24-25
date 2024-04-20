import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: () => ({
                dark: {
                  css: {
                    color: 'white',
                  },
                },
            }),
            dropShadow: {
                light: "1px 1px 1px #959595"
            }
        },
    },
    plugins: [
        plugin(
            function ({ addUtilities }) {
                addUtilities({
                    ".rotate-y-180": {
                        transform: "rotateY(180deg)",
                    },
                })
            }
        )
    ],
};
export default config;
