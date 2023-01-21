/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0071dc",
                },
                secondary: {
                    DEFAULT: "#ffc221",
                },
                heading: {
                    DEFAULT: "#252525",
                },
                body: "#333333",
                light: "#666666",
                white: {
                    DEFAULT: "#FFFFFF",
                    200: "#f2f2f2",
                    300: "#f3f3f3",
                    400: "#f4f4f4",
                    500: "#f5f5f5",
                    600: "#f6f6f6",
                    700: "#f7f7f7",
                    800: "#f8f8f8",
                },
            },
            spacing: {
                7.5: "1.875rem",
                13: "3.25rem",
                15: "3.75rem",
            },
        },

        fontSize: {
            base: "15px",
            normal: "16px",
            xs: "13px",
            sm: "0.875rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
        },
        fontFamily: {
            base: ["'Inter', sans-serif"],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1200px",
            xl: "1440px",
        },
    },
    plugins: [],
};
