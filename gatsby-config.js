module.exports = {
  siteMetadata: {
    title: `OperationAIR`,
    description: `We assist in respiration by building ventilators.`,
    author: `OperationAIR`
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `operationAIR`,
        short_name: `operationAIR`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#263655`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
