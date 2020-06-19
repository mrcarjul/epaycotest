import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

// Personalized components
import { FormModal } from "../../components";

// Services
import API from "../../services/countryApi";

const { getCountries } = API;

function Dashboard() {
  const [fetching, setFetching] = useState(false);
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [lastName, setLastName] = useState("");
  const [docId, setDocId] = useState("");

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const requestCountries = async () => {
    try {
      setFetching(true);
      const response = await getCountries();
      if (response?.data?.length > 0) {
        // As requested in requirments only show first 20
        const selectedCountries = response.data.filter((c, idx) => idx < 20);
        // Response gives too much useless data, clean to take only the payload
        const countriesPayload = selectedCountries.map((c) => ({
          id: c.alpha3Code,
          name: c.name,
        }));
        setCountries(countriesPayload);
      }
      setFetching(false);
    } catch (err) {
      // TODO manage error
    }
  };

  useEffect(() => {
    requestCountries();
  }, []);

  /**
   * @description Simple form validation
   */
  const onValidateForm = () => {
    if (name === "" || lastName === "" || country === "" || docId === "") {
      setError(true);
    } else {
      setError(false);
    }
    setOpen(true);
  };

  /**
   * @description Resets to initial values
   */
  const clearForm = () => {
    setName("");
    setCountry('');
    setLastName("");
    setDocId("");
    setError(false);
  };

  const onSelectCountry = (e) => {
    setCountry(e.target.value);
  };

  const onSelectName = (e) => {
    setName(e.target.value);
  };

  const onSelectLastName = (e) => {
    setLastName(e.target.value);
  };

  const onSelectDocId = (e) => {
    setDocId(e.target.value);
  };

  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  return (
    <div className="animated fadeIn">
      <FormModal isError={error} open={open} toggle={toggleModal} />
      {fetching ? (
        loading()
      ) : (
        <>
          <Row>
            <Col xs="12" sm="12" lg="12">
              <div className="title marginContent">
                Información del formulario
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="12">
              <div className="subtitle marginContent">
                Ingrese el titulo y la descripción que visualizarán los usuarios
                durante el proceso de pago
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="6">
              <FormGroup>
                <Label htmlFor="name">
                  Nombre <span>*</span>
                </Label>
                <Input
                  type="text"
                  invalid={error && name === "" ? "invalid" : undefined}
                  id="name"
                  value={name}
                  onChange={onSelectName}
                />
                <FormFeedback
                  invalid={error && name === "" ? "invalid" : undefined}
                >
                  El Nombre es requerido
                </FormFeedback>
              </FormGroup>
            </Col>

            <Col xs="12" sm="12" lg="6">
              <FormGroup>
                <Label htmlFor="lastname">
                  Apellido <span>*</span>
                </Label>
                <Input
                  type="text"
                  invalid={error && lastName === "" ? "invalid" : undefined}
                  id="lastname"
                  value={lastName}
                  onChange={onSelectLastName}
                />
                <FormFeedback
                  invalid={error && lastName === "" ? "invalid" : undefined}
                >
                  El Apellido es requerido
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="6">
              <FormGroup>
                <Label htmlFor="country">
                  Seleccione un país <span>*</span>
                </Label>
                <Input
                  type="select"
                  name="country"
                  id="country"
                  value={country}
                  onChange={onSelectCountry}
                  invalid={error && country === "" ? "invalid" : undefined}
                >
                  <option value={""}>Seleccione</option>
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Input>
                <FormFeedback
                  invalid={error && country === "" ? "invalid" : undefined}
                >
                  El País es requerido
                </FormFeedback>
              </FormGroup>
            </Col>

            <Col xs="12" sm="12" lg="6">
              <FormGroup>
                <Label htmlFor="docId">
                  Número de documento <span>*</span>
                </Label>
                <Input
                  type="text"
                  invalid={error && docId === "" ? "invalid" : undefined}
                  id="docId"
                  value={docId}
                  onChange={onSelectDocId}
                />
                <FormFeedback
                  invalid={error && docId === "" ? "invalid" : undefined}
                >
                  El Número de documento es requerido
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="3">
              <Button
                block
                color="primary"
                className="marginContent"
                onClick={onValidateForm}
              >
                enviar
              </Button>
            </Col>
            <Col
              xs="12"
              sm="12"
              lg="3"
              className="marginContent"
              onClick={clearForm}
            >
              <Button block outline color="primary">
                Cancelar
              </Button>
            </Col>
            <Col lg="6" />
          </Row>
        </>
      )}
    </div>
  );
}

export default Dashboard;
