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
                <Card.Title as="h4">Fees View Mode</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Fee Amount</th>
                      <th className="border-0">Department ID</th>
                      <th className="border-0">Fee type</th>
                      <th className="border-0">Level</th>
                      <th className="border-0">Date/Time Created</th>
                      <th className="border-0">Creator ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>GH¢36,738</td>
                      <td>8</td>
                      <td>Type1</td>
                      <td>2</td>
                      <td>DateTime</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>GH¢36,738</td>
                      <td>3</td>
                      <td>Type1</td>
                      <td>2</td>
                      <td>DateTime</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>GH¢36,738</td>
                      <td>5</td>
                      <td>Type1</td>
                      <td>2</td>
                      <td>DateTime</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>GH¢36,738</td>
                      <td>2</td>
                      <td>Type1</td>
                      <td>2</td>
                      <td>DateTime</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>GH¢36,738</td>
                      <td>7</td>
                      <td>Type1</td>
                      <td>2</td>
                      <td>DateTime</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>GH¢36,738</td>
                      <td>4</td>
                      <td>Type1</td>
                      <td>2</td>
                      <td>DateTime</td>
                      <td>5</td>
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
