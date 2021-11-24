import React from "react";
// react-bootstrap components
import { Container, Row, Col } from "react-bootstrap";

import AdmissionsLinkCard from "views/forDashboard/AdmissionsLinkCard";
import FeesLinkCard from "views/forDashboard/FeesLinkCard";
import DepartmentsLinkCard from "views/forDashboard/DepartmentsLinkCard";
import StudentsLinkCard from "views/forDashboard/StudentsLinkCard";
import StaffLinkCard from "views/forDashboard/StaffLinkCard";
import AcademicCalendarLinkCard from "views/forDashboard/AcademicCalendarLinkCard";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="3">
            <AdmissionsLinkCard />
          </Col>
          <Col md="3">
            <FeesLinkCard />
          </Col>

          <Col md="3">
            <DepartmentsLinkCard />
          </Col>

          <Col md="3">
            <StudentsLinkCard />
          </Col>
          <Col md="3">
            <StaffLinkCard />
          </Col>
          <Col md="3">
            <AcademicCalendarLinkCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
