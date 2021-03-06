// import { Link } from "gatsby";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import nameLogo from "../images/naam-operationAIR.svg";
import PropTypes from "prop-types";

function Footer(en = false) {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "components" }
        internal: { mediaType: { eq: "text/markdown" } }
        name: { eq: "footer" }
      ) {
        childMarkdownRemark {
          frontmatter {
            socialLinks {
              name
              link
              viewport
              path
            }
            footerMenu {
              titleLeft
              titleRight
              itemsLeft {
                title
                route
              }
              itemsRight {
                title
                route
              }
            }
          }
        }
      }
      file(
        sourceInstanceName: { eq: "components" }
        internal: { mediaType: { eq: "text/markdown" } }
        name: { eq: "footer" }
      ) {
        childMarkdownRemark {
          frontmatter {
            socialLinks {
              name
              link
              path
            }
            footerMenu_en {
              titleLeft
              titleRight
              itemsLeft {
                title
                route
              }
              itemsRight {
                title
                route
              }
            }
          }
        }
      }
    }
  `);

  const socials = data.file.childMarkdownRemark.frontmatter.socialLinks;
  let menu = data.file.childMarkdownRemark.frontmatter.footerMenu;
  if (en.en) {
    menu = data.file.childMarkdownRemark.frontmatter.footerMenu_en;
    return (
        <footer className="bg-alabaster">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="xl:col-span-1">
                <img className="h-24" src={nameLogo} alt="OperationAIR"/>
                {socials && (
                    <div className="mt-8 flex">
                      {socials.map((social, index) => (
                          <a
                              href={social.link}
                              className={`${index >= 1 &&
                              `ml-4`} text-ucla hover:text-gray-500`}
                              key={index}
                          >
                            <span className="sr-only">{social.name}</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox={social.viewport}
                                dangerouslySetInnerHTML={{__html: social.path}}
                            ></svg>
                          </a>
                      ))}
                    </div>
                )}
              </div>
              <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 xl:mt-0 xl:col-span-2">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                      {menu.titleLeft}
                    </h4>
                    <ul className="mt-4">
                      {menu.itemsLeft.map((item, index) => (
                          <li key={index} className={`${index >= 1 && `mt-4`}`}>
                            <Link
                                to={item.route}
                                className="text-base leading-6 text-gray-500 hover:text-gray-900"
                            >
                              {item.title}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                      {menu.titleRight}
                    </h4>
                    <ul className="mt-4">
                      {menu.itemsRight.map((item, index) => (
                          <li key={index} className={`${index >= 1 && `mt-4`}`}>
                            <Link
                                to={item.route}
                                className="text-base leading-6 text-gray-500 hover:text-gray-900"
                            >
                              {item.title}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                    Subscribe to our newsletter
                  </h4>
                  <p className="mt-4 text-gray-500 text-base leading-6">
                    Follow the latest developments
                  </p>
                  <form
                      className="mt-4 sm:flex sm:max-w-md"
                      action="https://operationair.us19.list-manage.com/subscribe/post"
                      method="POST"
                  >
                    <input
                        type="hidden"
                        name="u"
                        value="01749234c366bf900be95992a"
                    />
                    <input type="hidden" name="id" value="21e6dd4f57"/>
                    <input
                        aria-label="Email address"
                        type="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        name="MERGE0"
                        required
                        className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline transition duration-150 ease-in-out"
                        placeholder="Enter emailaddress"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                          className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese hover:bg-ucla focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm leading-5 text-gray-500">
                    We care about your personal data. Read how in our{` `}
                    <Link
                        to="/privacyverklaring"
                        className="font-medium text-gray-900 underline"
                    >
                      Privacy statement
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-air-gray pt-8">
              <p className="text-base leading-6 text-gray-400 text-center">
                &copy; {new Date().getFullYear()} OperationAIR. All rights reserved. <br/>
                <a
                    className="underline flex justify-center items-center"
                    href="https://github.com/TECHMAUS/operationAIR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <span>Source Code on GitHub</span>
                  <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="ml-1 h-4 w-4"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </footer>
    );
  } else {
    return (
        <footer className="bg-alabaster">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="xl:col-span-1">
                <img className="h-24" src={nameLogo} alt="OperationAIR"/>
                {socials && (
                    <div className="mt-8 flex">
                      {socials.map((social, index) => (
                          <a
                              href={social.link}
                              className={`${index >= 1 &&
                              `ml-4`} text-ucla hover:text-gray-500`}
                              key={index}
                          >
                            <span className="sr-only">{social.name}</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox={social.viewport}
                                dangerouslySetInnerHTML={{__html: social.path}}
                            ></svg>
                          </a>
                      ))}
                    </div>
                )}
              </div>
              <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 xl:mt-0 xl:col-span-2">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                      {menu.titleLeft}
                    </h4>
                    <ul className="mt-4">
                      {menu.itemsLeft.map((item, index) => (
                          <li key={index} className={`${index >= 1 && `mt-4`}`}>
                            <Link
                                to={item.route}
                                className="text-base leading-6 text-gray-500 hover:text-gray-900"
                            >
                              {item.title}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                      {menu.titleRight}
                    </h4>
                    <ul className="mt-4">
                      {menu.itemsRight.map((item, index) => (
                          <li key={index} className={`${index >= 1 && `mt-4`}`}>
                            <Link
                                to={item.route}
                                className="text-base leading-6 text-gray-500 hover:text-gray-900"
                            >
                              {item.title}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                    Abonneer op onze nieuwsbrief
                  </h4>
                  <p className="mt-4 text-gray-500 text-base leading-6">
                    Volg de laatste ontwikkelingen vanuit uw inbox.
                  </p>
                  <form
                      className="mt-4 sm:flex sm:max-w-md"
                      action="https://operationair.us19.list-manage.com/subscribe/post"
                      method="POST"
                  >
                    <input
                        type="hidden"
                        name="u"
                        value="01749234c366bf900be95992a"
                    />
                    <input type="hidden" name="id" value="21e6dd4f57"/>
                    <input
                        aria-label="Email address"
                        type="email"
                        autoCapitalize="off"
                        autoCorrect="off"
                        name="MERGE0"
                        required
                        className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline transition duration-150 ease-in-out"
                        placeholder="Voer uw mailadres in"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                          className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese hover:bg-ucla focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Inschrijven
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm leading-5 text-gray-500">
                    Wij geven om uw persoonlijke data. Lees hoe in onze{` `}
                    <Link
                        to="/privacyverklaring"
                        className="font-medium text-gray-900 underline"
                    >
                      Privacy Voorwaarden
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-air-gray pt-8">
              <p className="text-base leading-6 text-gray-400 text-center">
                &copy; {new Date().getFullYear()} OperationAIR. Alle rechten
                voorbehouden. <br/>
                <a
                    className="underline flex justify-center items-center"
                    href="https://github.com/TECHMAUS/operationAIR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <span>Source Code on GitHub</span>
                  <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="ml-1 h-4 w-4"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </footer>
    );
  }
}

Footer.propTypes = {
  en: PropTypes.bool
};

export default Footer;
