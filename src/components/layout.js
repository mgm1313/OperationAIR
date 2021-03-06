import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children, en = false }) {
  return (
    <div className="relative flex flex-col font-sans min-h-screen text-gray-900">
      <Header en={en}/>

      <main className="flex flex-col flex-1 md:justify-center mx-auto px-4 py-4 lg:py-8 md:p-8 w-full">
        {children}
      </main>

      <Footer en={en}/>
    </div>
  );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    en: PropTypes.bool
};

export default Layout;
