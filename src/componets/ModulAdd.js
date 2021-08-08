import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import '../css/AddProducts.css'

const AddProducts = ({ showModal, handleClose, name, picture, price, category, handleSubmit, changeHandler}) => {
  return (
    <Modal show={showModal} onHide={handleClose} className="modals">
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
              <Form.Control type="text" value={name} name="name" onChange={(event)=>{changeHandler(event)}}/>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm={2}>
              Image
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" value={picture} name="picture" onChange={(event)=>{changeHandler(event)}}/>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" value={price} name="price" onChange={(event)=>{changeHandler(event)}}/>
            </Col>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} name="category" onChange={(event)=>{changeHandler(event)}}>
              <option>Category</option>
              <option value="coffee">Coffee</option>
              <option value="non coffee">Non Coffee</option>
              <option value="foods">Foods</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose} className="cancel">
          Cancel
        </Button>
        <Button variant="primary" type="reset" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProducts;
