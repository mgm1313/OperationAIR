const path = require(`path`);

const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`);
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`);

  const pages = await graphql(`
    {
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "pages" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `);

  const articles = await graphql(`
    {
      allFile(
        filter: {
          internal: { mediaType: { eq: "text/markdown" } }
          sourceInstanceName: { eq: "blog" }
        }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              id
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (pages.errors || articles.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  pages.data.allFile.edges.forEach(({ node }) => {
    const markdown = node.childMarkdownRemark;

    createPage({
      path: `/${markdown.frontmatter.slug}`,
      component: pageTemplate,
      context: {
        slug: markdown.frontmatter.slug
      }
    });
  });

  articles.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/ontwikkelingen/${node.name}`,
      component: blogTemplate,
      context: {
        id: node.childMarkdownRemark.id
      }
    });
  });
};
