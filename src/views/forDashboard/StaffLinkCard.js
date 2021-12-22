import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const StaffLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={require("assets/img/dashboard/students.jpg").default}
    />
    <Card.Body>
      <Card.Title>Staff</Card.Title>
      <Card.Text>- Add/Update, Payroll, Assign Courses</Card.Text>

      <Button variant="success">View Staff</Button>
    </Card.Body>
  </Card>
);

export default StaffLinkCard;
