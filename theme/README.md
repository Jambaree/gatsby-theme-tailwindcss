A Gatsby theme to easily use tailwindcss.

## Summary

This theme installs:

- [Tailwindcss](https://tailwindcss.com)
- [gatsby-plugin-postcss](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/)
- [Emotion (CSS in JS)](https://emotion.sh)

Tailwindcss and postcss are required to have tailwind properly working, emotion is installed because it is very common to use a CSS in JS framework and I think it is useful to have emotion and tailwind installed and configured to work together.

## Installation

```sh
npm install --save @jambaree/gatsby-theme-tailwindcss
```

or

```sh
yarn add @jambaree/gatsby-theme-tailwindcss
```

## Usage

**NOTE**: If you experience a FOUC (flash of unstyled content) when first loading pages, import the above mentioned `.css` file on `gatsby-browser.js`, like this:

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

#### Example usage

The only plugin included as default is the actual tailwindcss required to work, but I do recommend using the autoprefixer plugin.

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
