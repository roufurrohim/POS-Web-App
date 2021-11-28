import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import "../css/AddProducts.css";

const AddProducts = ({
  showModal,
  handleClose,
  name,
  picture,
  price,
  category,
  handleSubmit,
  changeHandler,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      className="modals"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={name}
                name="name"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Image
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={picture}
                name="picture"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={price}
                name="price"
                onChange={(event) => {
                  changeHandler(event);
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState" className="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              name="category"
              onChange={(event) => {
                changeHandler(event);
              }}
              className="select"
            >
              <option>Category</option>
              <option value="coffee">Coffee</option>
              <option value="non coffee">Non Coffee</option>
              <option value="foods">Foods</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className="cancelAdd">
          Cancel
        </Button>
        <Button type="reset" onClick={handleSubmit} className="addModal">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProducts;
