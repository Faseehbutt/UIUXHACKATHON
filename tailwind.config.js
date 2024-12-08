/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        darkgray: "#9f9f9f",
        snow: {
          "100": "#faf5f5",
          "200": "#faf4f4",
        },
        darkgoldenrod: "#b88e2f",
        darkkhaki: "#cdba7b",
        mediumslateblue: "#816dfa",
        moccasin: "#fbebb5",
        oldlace: {
          "100": "#fff9e6",
          "200": "#fff9e5",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      xs: "12px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      smi: "13px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      "41xl": "60px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};