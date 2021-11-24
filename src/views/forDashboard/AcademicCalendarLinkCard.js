import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const AcademicCalendarLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={require("assets/img/dashboard/applicants.jpg").default}
    />
    <Card.Body>
      <Card.Title>Academic Calendar</Card.Title>
      <Card.Text>- Update Info, Fees Due, Add/Update Grades</Card.Text>

      <Link to="/   ">
        <Button variant="success">View Academic Calendar</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default AcademicCalendarLinkCard;
