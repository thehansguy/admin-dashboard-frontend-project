import React from "react";
// react-bootstrap components
import { Button, Row, Col, Form } from "react-bootstrap";

function Form1AdmissionApplicants_4_AttachedDocuments() {
  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Passport</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Information Page of Passport</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Non-Criminal Report</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Physical Examination Report</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Two Blank Visa Pages</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Birth Certificates</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>
          Copies Of Certificate(S) Records (All Certificates in Single File Pdf
          Format)
        </Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>
          Official Transcript from All Schools Attended (All Transcripts in
          Single File Pdf Format)
        </Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Resume/CV</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Recommendation Letter 1</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Recommendation Letter 2</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Statement Of Purpose/Study Plan/Research Plan</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Receipt Of Payment of Application Fee</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </>
  );
}

export default Form1AdmissionApplicants_4_AttachedDocuments;
