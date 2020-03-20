import React from "react";
import { Link } from "gatsby";

import PropTypes from "prop-types";

function Breadcrumb({ title, blog }) {
  return (
    <nav
      className="text-sm lg:text-base font-bold mb-4 sm:mb-6 lg:mb-8 overflow-x-auto"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex whitespace-no-wrap">
        <li className="flex items-center">
          <Link className="no-underline hover:underline" to="/">
            Home
          </Link>
          <svg
            className="fill-current w-3 h-3 mx-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        {blog && (
          <li className="flex items-center">
            <Link className="no-underline hover:underline" to="/ontwikkelingen">
              Ontwikkelingen
            </Link>
            <svg
              className="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
        )}
        <li
          className="no-underline capitalize text-gray-400"
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  blog: PropTypes.bool
};

export default Breadcrumb;
