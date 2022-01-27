A Gatsby theme to easily use tailwindcss.

## Summary

This theme installs:

- [Tailwindcss](https://tailwindcss.com)
- [gatsby-plugin-postcss](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/)
- [Emotion (CSS in JS)](https://emotion.sh)

This was meant to use with a gatsby new project that doesn't already have tailwind configured.

It will automatically generate a src/styles/globals.css file as well as the tailwind.config.js file with tailwinds --full config (the same as using npx tailwindcss init --full)

More information here: https://tailwindcss.com/docs/configuration

## Installation

```sh
yarn add @jambaree/gatsby-theme-tailwindcss
```

## Usage

Add the newly generated globals.css file to your gatsby-browser

```js
//gatsby-browser.js
import "./src/styles/globals.css"
```

### Theme options

This theme is using [gatsby-plugin-postcss](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/) under the hood, so you can pass in any options you would to the actual postcss plugin (postCssPlugins and cssLoaderOptions)

    NOTE: using a postcss.config.js file is not supported, you have to use the options: {} object of the theme.

| Key                | Default value            | Description                            |
| ------------------ | ------------------------ | -------------------------------------- |
| `postCssPlugins`   | [require("tailwindcss")] | postcss-plugins to load                |
| `cssLoaderOptions` | {}                       | postcss css loader options             |
| `emotionOptions`   | {}                       | emotion `babel-plugin-emotion` options |

## With autoprefixer

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
  ],
}
```
