const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      aliceblue: "#f0f8ff",
      sky: colors.sky,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      cyan: colors.cyan,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      shadow: "#6a6a6a",
      current: colors.current,
      transparent: colors.transparent,
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.12rem",
      xl: "1.25rem",
      "3/2xl": "1.373rem",
      "2xl": "1.563rem",
      "5/2xl": "1.673rem",
      "3xl": "1.953rem",
      "7/2xl": "2.264rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      screens: {
        sm: "380px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, matchUtilities, theme }) {
      addUtilities({
        ".colored-shadow": {
          textShadow: "-.5px 0px 0px #f00e, .5px 0px 0px #00fe",
        },
        ".text-shadow": {
          textShadow: `1px 1px 1px`,
        },
      });
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: `1px 1px 1px ${value}`,
          }),
        },
        {
          values: theme("colors"),
        }
      );
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontFamily: theme("fontFamily.serif"),
          marginTop: theme("spacing.10"),
          marginBottom: theme("spacing.6"),
        },
        h2: {
          fontSize: theme("fontSize.5/2xl"),
          fontFamily: theme("fontFamily.serif"),
          marginTop: theme("spacing.7"),
          marginBottom: theme("spacing.4"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.serif"),
          marginTop: theme("spacing.6"),
          marginBottom: theme("spacing.3"),
        },
        h4: {
          fontSize: theme("fontSize.3/2xl"),
          fontFamily: theme("fontFamily.serif"),
          marginTop: theme("spacing.5"),
          marginBottom: theme("spacing.3"),
        },
        h5: {
          fontSize: theme("fontSize.xl"),
          fontFamily: theme("fontFamily.serif"),
          marginTop: theme("spacing.4"),
          marginBottom: theme("spacing.2"),
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.serif"),
          marginTop: theme("spacing.4"),
          marginBottom: theme("spacing.2"),
        },
        [`@media (min-width: ${theme("screens.md")})`]: {
          h1: {
            fontSize: theme("fontSize.7/2xl"),
          },
          h2: {
            fontSize: theme("fontSize.3xl"),
          },
          h3: {
            fontSize: theme("fontSize.5/2xl"),
          },
          h4: {
            fontSize: theme("fontSize.2xl"),
          },
          h5: {
            fontSize: theme("fontSize.3/2xl"),
          },
          h6: {
            fontSize: theme("fontSize.xl"),
          },
        },
        [`@media (min-width: ${theme("screens.lg")})`]: {
          h1: {
            fontSize: theme("fontSize.4xl"),
          },
          h2: {
            fontSize: theme("fontSize.7/2xl"),
          },
          h3: {
            fontSize: theme("fontSize.3xl"),
          },
          h4: {
            fontSize: theme("fontSize.5/2xl"),
          },
          h5: {
            fontSize: theme("fontSize.2xl"),
          },
          h6: {
            fontSize: theme("fontSize.3/2xl"),
          },
        },
        p: {
          marginTop: ".75rem",
          marginBottom: ".25rem",
          letterSpacing: ".02rem",
        },
        li: {
          marginTop: ".75rem",
          marginBottom: ".25rem",
          letterSpacing: ".02rem",
        },
        code: {
          fontFamily: theme("fontFamily.mono"),
        },
        a: {
          fontWeight: theme("fontWeight.semibold"),
          color: theme("colors.green.400"),
          textShadow: "1px 1px 1px #15803d",
        },
        "a:hover": {
          color: theme("colors.cyan.400"),
          textShadow: "1px 1px 1px #0891b2",
        },
        b: {
          fontWeight: theme("fontWeight.semibold"),
        },
      });
    }),
  ],
};
