import React from "react";
import { Card, Button } from "react-bootstrap";

const DepartmentsLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="https://loremflickr.com/320/240" />
    <Card.Body>
      <Card.Title>Departments</Card.Title>
      <Card.Text></Card.Text>
      <Button variant="success">View Departments</Button>
    </Card.Body>
  </Card>
);

export default DepartmentsLinkCard;
