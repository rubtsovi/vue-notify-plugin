const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./demo/**/*.vue", "./demo/*.ts"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": ["Montserrat", "ui-sans-serif", "system-ui"]
        },
        borderWidth: {
            "0": "0",
            "3": "3px"
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "#2f34de",
            secondary: "#FA8334",
            success: "#0CB059",
            warning: "#FCF408",
            info: "#07A0C3",
            danger: "#FB4D3D",
            gray: colors.gray,
            black: colors.black,
            white: colors.white
        },
        extend: {
            width: {
                "n-border-3": "calc(100% + 6px)"
            },
            margin: {
                "-3px": "-3px"
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ["disabled"],
            cursor: ["disabled"],
            borderColor: ["disabled"],
            textColor: ["disabled"],
        },
    },
    plugins: [],
}
