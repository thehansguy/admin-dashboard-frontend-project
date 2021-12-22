import React from "react";

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

      <Button variant="success">View Academic Calendar</Button>
    </Card.Body>
  </Card>
);

export default AcademicCalendarLinkCard;
