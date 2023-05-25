import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import Header from "@/componets/Header";

const AppLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
