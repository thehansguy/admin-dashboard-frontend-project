import React from "react";
import { Card, Button } from "react-bootstrap";

const FeesLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={require("assets/img/dashboard/fees.jpg").default}
    />
    <Card.Body>
      <Card.Title>Fees</Card.Title>
      <Card.Text>- Department</Card.Text>
      <br />
      <Button variant="success">View Fees</Button>
    </Card.Body>
  </Card>
);

export default FeesLinkCard;
