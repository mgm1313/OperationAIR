import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";

import toHTML from "../utils/md2html";

import pageData from "../content/pages/articles/articles.yml";

function BlogsPage() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            childMarkdownRemark {
              excerpt(format: PLAIN, truncate: true, pruneLength: 180)
              frontmatter {
                date(formatString: "DD MMM YYYY", locale: "nl-NL")
                title
                featuredImg {
                  childImageSharp {
                    fluid(maxWidth: 768) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            name
          }
        }
      }
    }
  `);

  const blogPosts = data.allFile.edges;

  return (
    <Layout>
      <SEO title="De laatste ontwikkelingen" />

      <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Breadcrumb title="Ontwikkelingen" />

        <div className="mb-8 max-w-screen-sm">
          <h1>{pageData.title}</h1>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: toHTML(pageData.introduction) }}
          ></div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:col-gap-4 sm:row-gap-6 md:col-gap-6 md:row-gap-8 lg:grid-cols-3">
          {blogPosts.map((edge, index) => {
            const post = edge.node.childMarkdownRemark.frontmatter;

            return (
              <Link
                key={edge.node.name}
                to={`/ontwikkelingen/${edge.node.name}`}
                className={`block group no-underline font-normal ${index >= 1 &&
                  `mt-4 sm:mt-0`}`}
              >
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                  <div className="relative pb-7/12 overflow-hidden">
                    <div className="absolute overflow-hidden inset-0">
                      <Img
                        className="max-h-full w-full transition duration-500 ease-in-out transform group-hover:scale-105"
                        fluid={post.featuredImg.childImageSharp.fluid}
                        alt="Featured image"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 transition duration-200 leading-tight ease-in-out group-hover:text-teal-600">
                      {post.title}
                    </div>
                    <p className="text-gray-600 text-base">
                      {edge.node.childMarkdownRemark.excerpt}
                    </p>
                  </div>
                  <div className="px-6 pb-4 flex justify-between">
                    <div className="flex-1 flex items-center">
                      <svg
                        className="flex-shrink-0 h-4 lg:h-5 w-4 lg:w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-1 lg:ml-2 flex-1 text-gray-400 leading-none">
                        {post.date}
                      </span>
                    </div>
                    <svg
                      className="ml-4 h-5 w-5 text-gray-400 transition duration-500 ease-in-out transform group-hover:scale-110 group-hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default BlogsPage;
