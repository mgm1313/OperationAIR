import React from "react";
import {useStaticQuery, graphql} from "gatsby";

import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Breadcrumb from "../../components/breadcrumb";

import toHTML from "../../utils/md2html";

function PartnersPage() {
  const data = useStaticQuery(graphql`
    {
      pageContent: file(
        sourceInstanceName: { eq: "staticPages" }
        relativeDirectory: { eq: "en/partners" }
        internal: { mediaType: { eq: "text/markdown" } }
      ) {
        childMarkdownRemark {
          frontmatter {
            title
            body
            partners {
            title
              logo_s {
                title
                url
                image {
                  childImageSharp {
                    fluid(maxHeight: 96) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                  publicURL
                  extension
                }
              }
              logo_t {
                title
                url
                image {
                  childImageSharp {
                    fluid(maxHeight: 96) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                  publicURL
                  extension
                }
              }
            }
          }
        }
      }
      allFile(
        filter: {
          sourceInstanceName: { eq: "partners" }
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

  const pageData = data.pageContent.childMarkdownRemark.frontmatter;
  console.log(pageData.partners);

  return (
    <Layout en={true}>
      <SEO title="Our Partners" />

      <section className="">
        <Breadcrumb title="Partners" en={true}/>

        <div className="">
          <h1>{pageData.title}</h1>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: toHTML(pageData.body) }}
          >

          </div>
          <div className="">
            <div className="">
              <div className="">
                <div className="mt-8 grid grid-cols-3 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                  {pageData.partners.logo_s.map(partner => {
                    const logo = partner.image;
                    if (logo === null) return;

                    return (
                        <a
                            key={partner.title}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                        >
                          {// https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
                            logo.extension === "svg" && !logo.childImageSharp ? (
                                <img
                                    className="max-h-20"
                                    src={logo.publicURL}
                                    alt={partner.title}
                                />
                            ) : (
                                <Img
                                    className="max-h-20 w-full"
                                    imgStyle={{ objectFit: "contain" }}
                                    fluid={logo.childImageSharp.fluid}
                                    alt={partner.title}
                                />
                            )}
                        </a>
                    );
                  })}
                </div>
                <br/><br/>
                <div className="mt-8 grid grid-cols-4 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-4">
                  {pageData.partners.logo_t.map(partner => {
                    const logo = partner.image;
                    if (logo === null) return;

                    return (
                        <a
                            key={partner.title}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-1 flex justify-center py-3 px-0 bg-gray-50"
                        >
                          {// https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
                            logo.extension === "svg" && !logo.childImageSharp ? (
                                <img
                                    className="max-h-16"
                                    src={logo.publicURL}
                                    alt={partner.title}
                                />
                            ) : (
                                <Img
                                    className="max-h-16 w-full"
                                    imgStyle={{ objectFit: "contain" }}
                                    fluid={logo.childImageSharp.fluid}
                                    alt={partner.title}
                                />
                            )}
                        </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  );
}

export default PartnersPage;
