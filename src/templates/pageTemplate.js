import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";

function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO
        title={frontmatter.seo.browserTitle}
        description={frontmatter.seo.description}
      />
      <section className="max-w-full md:max-w-3xl mx-auto my-4 md:my-6 lg:my-12">
        <Breadcrumb title={frontmatter.slug} />

        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </section>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        seo: PropTypes.shape({
          browserTitle: PropTypes.string,
          description: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        seo {
          browserTitle
          description
        }
      }
    }
  }
`;
