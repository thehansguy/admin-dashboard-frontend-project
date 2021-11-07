import { React, useState } from "react";

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
  Modal,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";
import Form1AdmissionApplicants_1_PersonalInfo from "./Form1_AdmissionApplicants_1_PersonalInfo";
import Form1AdmissionApplicants_2_AcademicInfo from "./Form1_AdmissionApplicants_2_AcademicInfo";
import Form1AdmissionApplicants_3_Sponsors from "./Form1_AdmissionApplicants_3_Sponsors";
import Form1AdmissionApplicants_4_AttachedDocuments from "./Form1_AdmissionApplicants_4_AttachedDocuments";

function TableList() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Kwame Brown
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="personal-info" title="Personal Info">
              <Form1AdmissionApplicants_1_PersonalInfo />
            </Tab>
            <Tab eventKey="academic-info" title="Academic Info">
              <Form1AdmissionApplicants_2_AcademicInfo />
            </Tab>
            <Tab eventKey="sponsors" title="Sponsors">
              <Form1AdmissionApplicants_3_Sponsors />
            </Tab>
            <Tab eventKey="attached-documents" title="Attached Documents">
              <Form1AdmissionApplicants_4_AttachedDocuments />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Applicants</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kwame Brown</td>
                      <td>Pending Approval</td>
                      <td>
                        <Button onClick={() => setLgShow(true)}>View</Button>
                        <Button variant="warning">Edit</Button>
                      </td>
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
