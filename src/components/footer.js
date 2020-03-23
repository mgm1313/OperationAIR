// import { Link } from "gatsby";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useStaticQuery, graphql } from "gatsby";

import nameLogo from "../images/naam-operationAIR.svg";

const Footer = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       file(sourceInstanceName: {eq: "components"}, internal: {mediaType: {eq: "text/markdown"}}, name: {eq: "footer"}) {
  //         childMarkdownRemark {
  //           frontmatter {
  //             socialLinks {
  //               name
  //               link
  //               path
  //             }
  //           }
  //         }
  //       }
  //     }
  // `);

  // const socials = data.file.childMarkdownRemark.frontmatter.socialLinks;

  return (
    <footer className="bg-alabaster">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <img className="h-24" src={nameLogo} alt="OperationAIR" />
            {/* {socials && (
            <div className="mt-8 flex">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  className={`${index >= 1 &&
                    `ml-6`} text-ucla hover:text-gray-500`}
                  key={index}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{ __html: social.path }}
                  ></svg>
                </a>
              ))}
            </div>
          )} */}
          </div>
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                  Aanpak
                </h4>
                <ul className="mt-4">
                  <li>
                    <Link
                      to="/over"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      Visie & Missie
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/veelgestelde-vragen"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-ucla uppercase">
                  Team
                </h4>
                <ul className="mt-4">
                  <li>
                    <Link
                      to="/team"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      Samenstelling
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/ontwikkelingen"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      to="/contact"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      Contact
                    </Link>
                  </li>
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
                <input type="hidden" name="id" value="21e6dd4f57" />
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
                  <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese hover:bg-ucla focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
            voorbehouden. <br />
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
};

export default Footer;
