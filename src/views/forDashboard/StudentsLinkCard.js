import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const StudentsLinkCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="https://loremflickr.com/320/240" />
    <Card.Body>
      <Card.Title>Students</Card.Title>
      <Card.Text></Card.Text>

      <Link to="/">
        <Button variant="success">View Students</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default StudentsLinkCard;
