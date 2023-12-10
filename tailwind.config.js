/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: ['prettier-plugin-tailwindcss', require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#6b7280",
                    secondary: "#a8a29e",
                    accent: "#10b981",
                    neutral: "#d6d3d1",
                    "base-100": "#e7e5e4",
                    info: "#67e8f9",
                    success: "#4ade80",
                    warning: "#facc15",
                    error: "#ef4444",
                },
            },
            "dark",
            "cupcake",
        ],
    },
};
