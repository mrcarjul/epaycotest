import React from "react";
import { Col } from "reactstrap";

function DefaultFooter() {
  return (
    <React.Fragment>
      <Col xs="12" sm="6" lg="7">
        <span>ePayco © 2011 - 2019 todos los derechos reservados.</span>
      </Col>
      <Col xs="12" sm="6" lg="5">
        <span className="ml-auto alignRight">
          <img
            src={require("../../assets/img/footer/Davivienda.png")}
            alt="ePayco Logo"
          />
          <img
            src={require("../../assets/img/footer/logo_footer.png")}
            alt="ePayco Logo"
            style={{ marginTop: "7px", marginLeft: '5px' }}
          />
        </span>
      </Col>
    </React.Fragment>
  );
}

export default DefaultFooter;
