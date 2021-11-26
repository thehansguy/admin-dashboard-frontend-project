import React, { useState } from "react";
import axios from "axios";
// react-bootstrap components
import { Button, Row, Col, Form } from "react-bootstrap";

function Form1AdmissionApplicants_1_PersonalInfo({ setModalStatus }) {
  const [user, setUser] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const handleAdmit = (event) => {
    event.preventDefault();
    setModalStatus(false);
    console.log("user admitted", user);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", user)
      .then((response) => {
        console.log(response);
      });
  };
  const handleReject = (event) => {};
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Application Payment Reference</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Application Reference</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="body"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Middle</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>

      <hr />
      <strong>Permanent Address</strong>

      <br />
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Street Address 2</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State/ Province/ Region</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Postal/ Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <hr />
      <strong>Current Address</strong>
      <br />
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Street Address 2</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State/ Province/ Region</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Postal/ Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <hr />
      <strong>Home Phone</strong>
      <br />
      <Row>
        <Form.Group as={Col} controlId="">
          <Form.Label>Country Code</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>Area Code</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <hr />
      <strong>Mobile</strong>
      <br />
      <Row>
        <Form.Group as={Col} controlId="">
          <Form.Label>Country Code</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>Area Code</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group></Form.Group>
      </Row>

      <hr />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Region</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>

      <br />
      <Button variant="success" type="submit" onClick={handleAdmit}>
        Admit
      </Button>
      <Button variant="danger" type="submit" onClick={handleReject}>
        Reject
      </Button>
    </Form>
  );
}

export default Form1AdmissionApplicants_1_PersonalInfo;
