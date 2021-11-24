import React from "react";
import { Card, Button } from "react-bootstrap";

const FeesLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="https://loremflickr.com/320/240" />
    <Card.Body>
      <Card.Title>Fees</Card.Title>
      <Card.Text></Card.Text>
      <Button variant="success">View Fees</Button>
    </Card.Body>
  </Card>
);

export default FeesLinkCard;
