module.exports = {
  plugins: [
    {
      resolve: `@jambaree/gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
  ],
}
