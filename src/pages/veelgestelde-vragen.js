import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";

import toHTML from "../utils/md2html";

function FAQPage() {
  const data = useStaticQuery(graphql`
    {
      pageContent: file(
        sourceInstanceName: { eq: "staticPages" }
        relativeDirectory: { eq: "faq" }
        internal: { mediaType: { eq: "text/markdown" } }
      ) {
        childMarkdownRemark {
          frontmatter {
            title
            questions {
              question
              answer
            }
          }
        }
      }
    }
  `);

  const pageData = data.pageContent.childMarkdownRemark.frontmatter;
  const questions = pageData.questions;

  return (
    <Layout>
      <SEO title={pageData.title} />
      <section>
        <div className="max-w-screen-xl mx-auto py-6 md:py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <Breadcrumb title="Veelgestelde Vragen" />

          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {pageData.title}
          </h1>
          <div className="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`${
                    index >= 1 && `mt-8 border-t border-gray-200 pt-6`
                  } md:grid md:grid-cols-12 md:gap-8`}
                >
                  <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                    {question.question}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <div
                      className="-mt-2 text-base leading-6 text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: toHTML(question.answer),
                      }}
                    ></div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-16">
            Als uw vraag hier niet tussen staat neem dan{" "}
            <Link to="/contact">contact</Link> met ons op.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default FAQPage;
