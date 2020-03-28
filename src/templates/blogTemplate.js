import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";

function Template({ data}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const en = typeof window !== `undefined` ? window.location.href.indexOf("ontwikkelingen") === -1 : false;
  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <section className="w-full max-w-screen-md mx-auto">
        <div className="w-full relative bg-almond pb-2/5">
          <div className="absolute overflow-hidden inset-0">
            <Img
              className="max-h-full w-full"
              fluid={frontmatter.featuredImg.childImageSharp.fluid}
              alt="Featured image"
            />
          </div>
        </div>
      </section>

      <section className="max-w-full md:max-w-lg mx-auto my-4 md:my-6 lg:my-10">
        <Breadcrumb blog title={frontmatter.title} en={en}/>

        <div className="text-gray-400 text-sm lg:text-base mb-1">
          <span>{frontmatter.date}</span>
          <span className="mx-2">•</span>
          <span>
            Gemiddeld{` ${markdownRemark.timeToRead} `}
            {markdownRemark.timeToRead == 1 ? `minuut ` : `minuten `} leestijd
          </span>
        </div>

        <h1>{frontmatter.title}</h1>
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
        date: PropTypes.string.isRequired,
        featuredImg: PropTypes.node,
      }),
      timeToRead: PropTypes.string.isRequired,
    }),
  }),
};

export default Template;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "ddd DD MMMM YYYY", locale: "nl-NL")
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`;
