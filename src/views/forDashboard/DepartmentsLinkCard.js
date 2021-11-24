import React from "react";
import { Card, Button } from "react-bootstrap";

const DepartmentsLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={require("assets/img/dashboard/departments.jpg").default}
    />
    <Card.Body>
      <Card.Title>Departments</Card.Title>
      <Card.Text>-Add/Update Courses</Card.Text>
      <br />
      <Button variant="success">View Departments</Button>
    </Card.Body>
  </Card>
);

export default DepartmentsLinkCard;
