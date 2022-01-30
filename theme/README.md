A Gatsby theme to easily use tailwindcss.

## Summary

This theme installs:

- [heroicons](https://heroicons.com/)
- [headlessui](https://headlessui.dev/)
- [Tailwindcss](https://tailwindcss.com)
- [gatsby-plugin-postcss](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/)
- [Emotion (CSS in JS)](https://emotion.sh)

This was meant to use with a gatsby new project that doesn't already have tailwind configured.

It will automatically generate a src/styles/globals.css file as well as the tailwind.config.js file with tailwinds --full config (the same as using npx tailwindcss init --full)

More information here: https://tailwindcss.com/docs/configuration

You can now import 3 of the Hero components on the tailwind UI website(https://tailwindui.com/components/marketing/sections/heroes) MORE TO COME!

Right now you can only pass the data that each component already uses.

- [Hero1] (https://tailwindui.com/components/marketing/sections/heroes#component-b9bcab4538776a17fff93d18f82a8272)
- [Hero2] (https://tailwindui.com/components/marketing/sections/heroes#component-a3c09c7a3b8f4bd90d280722eaff9634)
- [Hero3] (https://tailwindui.com/components/marketing/sections/heroes#component-e5c15b9d1a503738005e35302043c802)

If you can't see the code this means you don't have permission on tailwindui.com

You can purchase an account here -> https://tailwindui.com/pricing

This package is in early stages so you may experience bugs if you try to pass in props that aren't expected in the tailwind component.

```js
import React from "react"
import { Hero1, Hero2, Hero3 } from "@jambaree/gatsby-theme-tailwindcss"
import { ChartBarIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline"

const navigation = [
  { name: "CustomNavigation", href: "#" },
  { name: "CustomNavigation", href: "#" },
  { name: "CustomNavigation", href: "#" },
  { name: "CustomNavigation", href: "#" },
]

const features = [
  {
    name: "Custom Feature Name",
    href: "#",
    description: "This is a custom description",
    icon: ChartBarIcon,
  },
]

const callsToAction = [
  { name: "Contact CustomName", href: "#", icon: PhoneIcon },
]

const resources = [
  {
    name: "Custom Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
]

const recentPosts = [{ id: 1, name: "Boost your Custom rate", href: "#" }]
const index = () => {
  return (
    <div>
      <Hero2 navigation={navigation} />
      <Hero1 navigation={navigation} />
      <Hero3
        features={features}
        callsToAction={callsToAction}
        resources={resources}
        recentPosts={recentPosts}
      />
    </div>
  )
}

export default index
```

I'm hoping to add more support for props in the future and the ability to customize it completely.

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
