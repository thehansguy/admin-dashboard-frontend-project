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

import _1_AdmissionApplicants_Table from "views/Tables/_1_AdmissionApplicants";
import _2_Fees_Table from "views/Tables/_2_Fees";
import _3_Departments_Table from "views/Tables/_3_Departments";
import _4_Students_Table from "views/Tables/_4_Students";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <_1_AdmissionApplicants_Table />
            <_2_Fees_Table />
            <_3_Departments_Table />
            <_4_Students_Table />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
