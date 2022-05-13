import PropTypes from "prop-types";
import React from "react";
import Header from "../header";
import Footer from "../footer";

function Layout({ children, inverted }) {
  return (
    <div>
      <Header inverted={inverted} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
