import React from "react";
import {useStaticQuery, graphql} from "gatsby";

import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";

import toHTML from "../utils/md2html";

function BlogsPage() {
  const data = useStaticQuery(graphql`
    {
      pageContent: file(
        sourceInstanceName: { eq: "staticPages" }
        relativeDirectory: { eq: "media" }
        internal: { mediaType: { eq: "text/markdown" } }
      ) {
        childMarkdownRemark {
          frontmatter {
            title
            body
            media {
              mediablock {
                date
                title
                url
                image {
                  childImageSharp {
                    fluid(maxWidth: 768) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const pageData = data.pageContent.childMarkdownRemark.frontmatter;

  const monthNames = ["jan.", "feb.", "mar.", "apr.", "mei.", "jun.",
    "jul.", "aug.", "sep.", "oct.", "nov.", "dec."
  ];

  return (
    <Layout>
      <SEO title="Media" />

      <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Breadcrumb title="Media" />

        <div className="mb-8 max-w-screen-sm">
          <h1>{pageData.title}</h1>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: toHTML(pageData.body) }}
          ></div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:col-gap-4 sm:row-gap-6 md:col-gap-20 md:row-gap-8 lg:grid-cols-2">

          {pageData.media.mediablock.sort((a,b) => {return new Date(a.date) - new Date(b.date);}).map((media, index) => {
            const logo = media.image;
            if (logo === null) return;

            let datetot = media.date.split("T")[0];
            let date = datetot;
            if(datetot.split("-").length === 3)
              date = datetot.split("-")[2] + " " + monthNames[parseInt(datetot.split("-")[1])] + " " + datetot.split("-")[0];
            return (
                <a
                key={index}
                href={media.url}
                className={`block group no-underline font-normal ${
                  index >= 1 && `mt-4 sm:mt-0`
                }`}
              >
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                    <div className="relative pb-7/12 overflow-hidden">
                      <div className="absolute overflow-hidden inset-0">
                        <Img
                            className="max-h-full w-full transition duration-500 ease-in-out transform group-hover:scale-105"
                            fluid={media.image.childImageSharp.fluid}
                            alt="Featured image"
                        />
                      </div>
                    </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 transition duration-200 leading-tight ease-in-out group-hover:text-teal-600">
                      {media.title}
                    </div>
                    <p className="text-gray-600 text-base" style={{width: "500px"}}>
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
                        {date}
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
              </a>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default BlogsPage;
