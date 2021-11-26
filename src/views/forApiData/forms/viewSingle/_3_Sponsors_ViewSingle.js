import React from "react";
// react-bootstrap components
import { Button, Row, Col, Form } from "react-bootstrap";

function Form1AdmissionApplicants_3_Sponsors() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Middle Name</Form.Label>
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
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
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
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
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
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>
            Relationship with Sponsor (Father, Mother, Other, Relative, Friend)
          </Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
      </Row>
      <Button variant="success" type="submit">
        Admit
      </Button>
      <Button variant="danger" type="submit">
        Reject
      </Button>
    </Form>
  );
}

export default Form1AdmissionApplicants_3_Sponsors;
