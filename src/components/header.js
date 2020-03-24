// import { Link } from "gatsby";
import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Transition from "./utils/transition";

import headerLogoNegative from "../images/logo-negative.svg";

function Header() {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "components" }
        internal: { mediaType: { eq: "text/markdown" } }
        name: { eq: "header" }
      ) {
        childMarkdownRemark {
          frontmatter {
            menuItems {
              title
              route
            }
          }
        }
      }
    }
  `);

  const menuItems = data.file.childMarkdownRemark.frontmatter.menuItems;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-20">
      <nav className="w-full bg-japanese py-2 md:py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <img
                  className="h-8 md:h-12 w-auto"
                  src={headerLogoNegative}
                  alt="Operation AIR logo"
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={() => setIsExpanded(true)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:block md:ml-10">
              {menuItems.map((link, index) => (
                <Link
                  key={index}
                  to={link.route}
                  partiallyActive={true}
                  activeClassName="underline"
                  className={`${
                    index >= 1 && `ml-2 lg:ml-4`
                  } inline-block rounded-lg leading-none py-2 px-3 font-medium text-gray-50 hover:bg-ucla focus:outline-none focus:bg-ucla transition duration-150 ease-in-out`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="inline-flex rounded-md shadow-md">
              <span className="inline-flex rounded-md shadow-xs">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-japanese bg-almond hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </span>
            </span>
          </div>
        </div>
      </nav>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } absolute top-0 inset-x-0 p-2 md:hidden`}
      >
        <Transition
          show={isExpanded}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="rounded-lg shadow-md transition transform origin-top-right">
            <div className="rounded-lg bg-japanese shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src={headerLogoNegative}
                    alt="Operation AIR logo"
                  />
                </Link>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsExpanded(false)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-ucla focus:outline-none focus:bg-ucla transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {menuItems.map((link, index) => (
                  <a
                    key={index}
                    href={link.route}
                    className={`${
                      index >= 1 && `mt-1`
                    } block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-ucla focus:outline-none focus:bg-ucla transition duration-150 ease-in-out`}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              <div>
                <Link
                  to="/contact"
                  className="block w-full px-5 py-3 text-center font-medium text-japanese bg-almond hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
}

export default Header;
