import React from "react";
// react-bootstrap components
import { Button, Row, Col, Form } from "react-bootstrap";

function Form1AdmissionApplicants_2_AcademicInfo() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Level of study you choose to pursue</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Program you choose to pursue</Form.Label>
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
          <Form.Label>Semester Intake</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Previous School Name</Form.Label>
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
          <Form.Label>Previous Degree Earned</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Year (From)</Form.Label>

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
          <Form.Label>Year To</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            placeholder="placeholder"
            disabled
            value="value"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Have you worked before?</Form.Label>
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

export default Form1AdmissionApplicants_2_AcademicInfo;
