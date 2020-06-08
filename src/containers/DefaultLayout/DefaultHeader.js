import React from "react";
import PropTypes from "prop-types";

import { AppSidebarToggler } from "@coreui/react";

const propTypes = {
  children: PropTypes.node,
};

function DefaultHeader({ children }) {
  return (
    <>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      {children}
    </>
  );
}

DefaultHeader.propTypes = propTypes;

export default DefaultHeader;
