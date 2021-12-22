import React from "react";

import { Card, Button } from "react-bootstrap";

const StudentsLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={require("assets/img/dashboard/students.jpg").default}
    />
    <Card.Body>
      <Card.Title>Students</Card.Title>
      <Card.Text>- Update Info, Fees Due, Add/Update Grades</Card.Text>

      <Button variant="success">View Students</Button>
    </Card.Body>
  </Card>
);

export default StudentsLinkCard;
