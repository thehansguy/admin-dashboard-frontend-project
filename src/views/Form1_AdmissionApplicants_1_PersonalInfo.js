import React from "react";
// react-bootstrap components
import { Button, Row, Col, Form } from "react-bootstrap";

function Form1AdmissionApplicants_1_PersonalInfo() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Application Payment Reference</Form.Label>
          <Form.Control placeholder="Application Payment Reference" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Application Payment Reference</Form.Label>
          <Form.Control placeholder="Application Payment Reference" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Middle</Form.Label>
          <Form.Control placeholder="Middle" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control placeholder="Gender" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control placeholder="Date of birth" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Country</Form.Label>
          <Form.Control placeholder="Country" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Application Payment Reference" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Region</Form.Label>
          <Form.Control placeholder="Password" />
        </Form.Group>
      </Row>
      <hr />
      <strong>Permanent Address</strong>

      <br />
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <hr />
      <strong>Current Address</strong>
      <br />
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <hr />
      <strong>Home Phone</strong>
      <br />
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <hr />
      <strong>Mobile</strong>
      <br />
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <br />
      <Button variant="success" type="submit">
        Admit
      </Button>
      <Button variant="danger" type="submit">
        Reject
      </Button>
    </Form>
  );
}

export default Form1AdmissionApplicants_1_PersonalInfo;
