import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

/**
 * @param {boolean} open flag for show/hide modal
 * @param {function} toggle
 * @param {string} className applied to container
 * @param {boolean} isError
 */
function FormModal({ open, toggle, className, isError }) {
  return (
    <Modal isOpen={open} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>
        {isError ? (
          <img src={require("../assets/img/extra/failure.png")} alt="Error" />
        ) : (
          <img
            src={require("../assets/img/extra/success.png")}
            alt="Correcto"
          />
        )}
      </ModalHeader>
      <ModalBody>
        {isError
          ? "formulario contiene errores"
          : "formulario enviado con éxito"}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          {isError ? "Regresar" : "Finalizar"}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default FormModal;
