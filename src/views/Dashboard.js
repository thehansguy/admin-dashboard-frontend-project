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
import TableList2Fees from "views/TableList2Fees";
import TableList3Departments from "views/TableList3Departments";
import TableList4Students from "views/TableList4Students";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <TableList1AddmissionApplicants />
            <TableList2Fees />
            <TableList3Departments />
            <TableList4Students />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
