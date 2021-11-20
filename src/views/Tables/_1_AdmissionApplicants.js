import { React, useState, useEffect } from "react";

import axios from "axios";

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

import _1_PersonalInfo_Form from "./Forms/_1_PersonalInfo";
import _2_AcademicInfo_Form from "./Forms/_2_AcademicInfo";
import _3_Sponsors_Form from "./Forms/_3_Sponsors";
import _4_AttachedDocuments_Form from "./Forms/_4_AttachedDocuments";

// import applicants from "../../Json/applicants.json";

const TableList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [axiosResponseState, setAxiosResponseState] = useState([]);

  useEffect(() => {
    axiosGetApiData();
  }, []);
  function axiosGetApiData() {
    const config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setAxiosResponseState(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleModalPopup = (e) => {
    setModalShow(true);
  };

  function handleViewButton(e) {
    handleModalPopup(e);
  }
  function handleEditButton(e) {
    handleModalPopup(e);
  }
  return (
    <>
      <Modal
        animation="true"
        size="xl"
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen="true"
        dialogClassName="modal-90w"
        aria-labelledby="example-modal-sizes-title-lg"
        // style="padding-top: 10% !important; "
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            TITLE
            {/* {axiosResponseState} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="personal-info"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="personal-info" title="Personal Info">
              <_1_PersonalInfo_Form setModalStatus={setModalShow} />
            </Tab>
            <Tab eventKey="academic-info" title="Academic Info">
              <_2_AcademicInfo_Form />
            </Tab>
            <Tab eventKey="sponsors" title="Sponsors">
              <_3_Sponsors_Form />
            </Tab>
            <Tab eventKey="attached-documents" title="Attached Documents">
              <_4_AttachedDocuments_Form />
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
                <Table id="tableid" className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {axiosResponseState?.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td>{data.id}</td>
                          <td>{data.title}</td>
                          <td>{data.status}</td>
                          <td>
                            <Button onClick={handleViewButton}>View</Button>
                            <Button
                              onClick={handleEditButton}
                              variant="warning"
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableList;
