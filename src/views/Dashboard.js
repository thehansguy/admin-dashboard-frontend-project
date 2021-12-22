import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/admin/admission-applicants">
              <AdmissionsLinkCard />
            </Link>
          </Col>
          <Col md="3">
            <Link to="/admin/fees">
              <FeesLinkCard />
            </Link>
          </Col>

          <Col md="3">
            <Link to="/admin/departments">
              <DepartmentsLinkCard />
            </Link>
          </Col>

          <Col md="3">
            <Link to="/admin/students">
              <StudentsLinkCard />
            </Link>
          </Col>

          <Col md="3">
            <Link to="/admin/academic-calendar">
              <AcademicCalendarLinkCard />
            </Link>
          </Col>

          {/* <Col md="3">
            <Link to="">
              <StaffLinkCard />
            </Link>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
