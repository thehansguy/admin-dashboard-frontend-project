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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import TableList1AddmissionApplicants from "./TableList1AdmissionApplicants";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <TableList1AddmissionApplicants />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
