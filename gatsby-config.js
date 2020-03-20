require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `OperationAIR`,
    description: `We assist in respiration by building ventilators.`,
    author: `OperationAIR`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "process.env.GOOGLE_ANALYTICS_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/pages/`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog/`,
        name: `blog`
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 512,
              showCaptions: ["title"],
              wrapperStyle: `margin:2rem auto;`
            }
          }
        ]
      }
    },
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
        extractors: [
          {
            extractor: class {
              /**
               * @param {object} content
               */
              static extract(content) {
                return content.match(/[\w-/.:]+(?<!:)/g) || [];
              }
            },
            extensions: ["js", "ts", "jsx", "tsx", "md", "mdx"]
          }
        ],
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`
  ]
};
