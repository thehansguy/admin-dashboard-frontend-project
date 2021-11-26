import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Department View Mode</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Department Name</th>
                      <th className="border-0">Faculty ID</th>
                      <th className="border-0">Date/Time Created</th>
                      <th className="border-0">Creator ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Department</td>

                      <td>Faculty</td>
                      <td>Date and Time</td>
                      <td>Creator</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
