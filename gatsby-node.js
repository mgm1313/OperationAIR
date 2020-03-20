const path = require(`path`);

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
    const markdown = node.childMarkdownRemark;

    createPage({
      path: `/ontwikkelingen/${markdown.frontmatter.slug}`,
      component: blogTemplate,
      context: {
        slug: markdown.frontmatter.slug
      }
    });
  });
};
