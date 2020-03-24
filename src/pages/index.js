import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ReactPlayer from "react-player";

import toHTML from "../utils/md2html";

function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      pageContent: file(
        sourceInstanceName: { eq: "staticPages" }
        relativeDirectory: { eq: "homepage" }
        internal: { mediaType: { eq: "text/markdown" } }
      ) {
        childMarkdownRemark {
          frontmatter {
            title
            introduction {
              subtitle
              brand
              mission
              text
              button1 {
                title
                link
              }
              button2 {
                title
                link
              }
              video {
                youtubeID
                subtitle
              }
            }
            blog {
              title
              introduction
            }
            partners {
              title
              content
              button1 {
                title
                link
              }
              button2 {
                title
                link
              }
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
            }
          }
        }
      }
      blogPosts: allFile(
        filter: { sourceInstanceName: { eq: "blog" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
        limit: 3
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

  const pageContent = data.pageContent.childMarkdownRemark.frontmatter;
  const blogPosts = data.blogPosts.edges;

  return (
    <Layout>
      <SEO keywords={[`technical`, `medicine`]} title={pageContent.title} />

      <section className="-mt-8">
        <div className="relative bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-0">
            <svg
              className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-alabaster"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y="72"
                width="640"
                height="640"
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
              />
            </svg>
          </div>

          <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
            <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    {pageContent.introduction.subtitle}
                  </div>
                  <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    <span className="normal-case">
                      {pageContent.introduction.brand}
                    </span>
                    {` `}
                    <br />
                    <span className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl text-ucla">
                      {pageContent.introduction.mission}
                    </span>
                  </h2>
                  <div
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                    dangerouslySetInnerHTML={{
                      __html: toHTML(pageContent.introduction.text),
                    }}
                  ></div>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to={pageContent.introduction.button1.link}
                        className="w-full flex items-center justify-center px-8 py-3 no-underline font-normal border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese hover:text-japanese hover:bg-air-gray focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        {pageContent.introduction.button1.title}
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to={pageContent.introduction.button2.link}
                        className="w-full flex items-center justify-center px-8 py-3 no-underline font-normal border border-transparent text-base leading-6 font-medium rounded-md text-japanese bg-almond hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        {pageContent.introduction.button2.title}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <svg
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                    width="640"
                    height="784"
                    fill="none"
                    viewBox="0 0 640 784"
                  >
                    <defs>
                      <pattern
                        id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                        x="118"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      y="72"
                      width="640"
                      height="640"
                      className="text-gray-50"
                      fill="currentColor"
                    />
                    <rect
                      x="118"
                      width="404"
                      height="784"
                      fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                    />
                  </svg>
                  <div className="mx-auto w-full lg:max-w-md">
                    <div className="relative rounded-lg shadow-lg w-full">
                      <div style={{ paddingTop: `56.25%` }}>
                        <ReactPlayer
                          url={
                            "https://youtu.be/" +
                            pageContent.introduction.video.youtubeID
                          }
                          light
                          controls
                          playIcon={
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                              <svg
                                className="h-20 w-20 text-japanese"
                                fill="currentColor"
                                viewBox="0 0 84 84"
                              >
                                <circle
                                  opacity="0.9"
                                  cx="42"
                                  cy="42"
                                  r="42"
                                  fill="white"
                                />
                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                              </svg>
                            </div>
                          }
                          className="absolute inset-0"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                    <p className="relative text-gray-500 lg:text-gray-400 text-xs italic">
                      {pageContent.introduction.video.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl">De laatste ontwikkelingen</h2>
          <div
            className="max-w-lg mx-auto"
            dangerouslySetInnerHTML={{
              __html: toHTML(pageContent.blog.introduction),
            }}
          ></div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6 lg:grid-cols-3">
          {blogPosts.map((edge, index) => {
            const post = edge.node.childMarkdownRemark.frontmatter;

            return (
              <Link
                key={edge.node.name}
                to={`/ontwikkelingen/${edge.node.name}`}
                className={`block group no-underline font-normal ${
                  index >= 1 && `mt-4 sm:mt-0`
                }`}
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

      <section>
        <div className="bg-azureish">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                  {pageContent.partners.title}
                </h2>
                <div
                  className="mt-3 max-w-3xl text-lg leading-7 text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: toHTML(pageContent.partners.content),
                  }}
                ></div>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Link
                      to={pageContent.partners.button1.link}
                      className="flex items-center justify-center px-5 py-3 no-underline font-normal border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese hover:text-japanese hover:bg-air-gray focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      {pageContent.partners.button1.title}
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to={pageContent.partners.button2.link}
                      className="flex items-center justify-center px-5 py-3 no-underline font-normal border border-transparent text-base leading-6 font-medium rounded-md text-japanese bg-almond hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
                    >
                      {pageContent.partners.button2.title}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {pageContent.partners.logo_s.map((partner) => {
                  const logo = partner.image;

                  return (
                    <a
                      key={partner.title}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                    >
                      {// https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
                      logo.extension == "svg" && !logo.childImageSharp ? (
                        <img
                          className="max-h-12"
                          src={logo.publicURL}
                          alt={partner.title}
                        />
                      ) : (
                        <Img
                          className="max-h-12 w-full"
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
      </section>
    </Layout>
  );
}

export default IndexPage;
