const fs = require("fs")

const tailwindConfig = `module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
}`

const globalsCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`
const globalsDir = "./styles/globals.css"
exports.onPluginInit = ({ actions, reporter }) => {
  try {
    if (fs.existsSync("tailwind.config.js")) {
      //file exists
      console.log("tailwind.config already exists!")
    } else {
      fs.writeFile("tailwind.config.js", tailwindConfig, function (err) {
        if (err) throw err
        console.log("tailwind.config was created successfully.")
      })
    }
  } catch (err) {
    console.log(err)
  }

  try {
    if (fs.existsSync(globalsDir)) {
      console.log("globals css already exists!")
    } else {
      fs.mkdirSync("./styles", { recursive: true })
      fs.writeFile("./styles/globals.css", globalsCss, function (err) {
        if (err) throw err
        console.log("globals.css was created successfully.")
      })
    }
  } catch (err) {
    console.log(err)
  }
}
