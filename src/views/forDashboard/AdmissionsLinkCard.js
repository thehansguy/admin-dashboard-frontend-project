import React from "react";
import { Card, Button } from "react-bootstrap";

const AdmissionsLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={require("assets/img/dashboard/applicants1.jpg").default}
    />
    <Card.Body>
      <Card.Title>Admission Applicants</Card.Title>
      <Card.Text>- Review Admission</Card.Text>
      <br />
      <Button variant="success">View Applicants</Button>
    </Card.Body>
  </Card>
);

export default AdmissionsLinkCard;
