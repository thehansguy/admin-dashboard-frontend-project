import React from "react";
import { Card, Button } from "react-bootstrap";

const AdmissionsLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="https://loremflickr.com/320/240" />
    <Card.Body>
      <Card.Title>Admissions</Card.Title>
      <Card.Text></Card.Text>
      <Button variant="success">View Applicants</Button>
    </Card.Body>
  </Card>
);

export default AdmissionsLinkCard;
