const fs = require("fs")

const tailwindConfig = `module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

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
