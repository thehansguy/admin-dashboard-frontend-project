import { React, useState, useEffect } from "react";

import axios from "axios";

// react-bootstrap components
import {
  Button,
  Card,
  Table as BootTable,
  Container,
  Row,
  Col,
  Modal,
  Tabs,
  Tab,
} from "react-bootstrap";

// semantic-ui component
import { Icon, Label, Menu, Table } from "semantic-ui-react";

// react bootstrap table 2 component
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

// custom components
import _1_PersonalInfo_ViewSingle from "../forms/viewSingle/_1_PersonalInfo_ViewSingle";
import _2_AcademicInfo_ViewSingle from "../forms/viewSingle/_2_AcademicInfo_ViewSingle";
import _3_Sponsors_ViewSingle from "../forms/viewSingle/_3_Sponsors_ViewSingle";
import _4_AttachedDocuments_ViewSingle from "../forms/viewSingle/_4_AttachedDocuments_ViewSingle";

import _1_PersonalInfo_Entry from "../forms/dataEntries/_1_PersonalInfo_Entry";
import _2_AcademicInfo_Entry from "../forms/dataEntries/_2_AcademicInfo_Entry";
import _3_Sponsors_Entry from "../forms/dataEntries/_3_Sponsors_Entry";
import _4_AttachedDocuments_Entry from "../forms/dataEntries/_4_AttachedDocuments_Entry";

import BootstrapTable2 from "../templates/BootstrapTable2";
import SemanticUITable from "../templates/SemanticUITable";

// import applicants from "../../Json/applicants.json";

const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
  },
  {
    dataField: "body",
    text: "body",
  },
];

const TableList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
    setIsEdit(false);
    handleModalPopup(e);
  }
  function handleEditButton(e) {
    setIsEdit(true);
    handleModalPopup(e);
  }
  const resetModal = () => {
    setIsEdit(false);
  };
  return (
    <>
      <Modal
        animation="true"
        size="xl"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setIsEdit(false);
        }}
        fullscreen="true"
        dialogClassName="modal-90w"
        aria-labelledby="example-modal-sizes-title-lg"
        // style="padding-top: 10% !important; "
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Admission Applicant View Mode
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
              {!isEdit ? (
                <BootstrapTable2 setModalStatus={setModalShow} />
              ) : (
                <BootstrapTable2 setModalStatus={setModalShow} />
              )}
            </Tab>
            <Tab eventKey="academic-info" title="Academic Info">
              {!isEdit ? (
                <_2_AcademicInfo_ViewSingle />
              ) : (
                <_2_AcademicInfo_Entry />
              )}
            </Tab>
            <Tab eventKey="sponsors" title="Sponsors">
              {!isEdit ? <_3_Sponsors_ViewSingle /> : <_3_Sponsors_Entry />}
            </Tab>
            <Tab eventKey="attached-documents" title="Attached Documents">
              {!isEdit ? (
                <_4_AttachedDocuments_ViewSingle />
              ) : (
                <_4_AttachedDocuments_Entry />
              )}
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
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {axiosResponseState?.map((data, key) => {
                      return (
                        <Table.Row key={key}>
                          <Table.Cell>
                            <Label ribbon>{data.id}</Label>
                          </Table.Cell>
                          <Table.Cell>{data.title}</Table.Cell>
                          <Table.Cell>pending</Table.Cell>
                          <Table.Cell>
                            <Button
                              onClick={handleViewButton}
                              variant="success"
                            >
                              View
                            </Button>
                            <Button
                              onClick={handleEditButton}
                              variant="warning"
                            >
                              Edit
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan="3">-- End --</Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
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
