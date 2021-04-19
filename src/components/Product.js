import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { Dash, Plus, Save, X } from "react-bootstrap-icons";

const Product = ({ item, handleAddItemToOrder, isLoading }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [quantity, setQuantity] = useState(1);

  const handleMoreQuantity = () => setQuantity(quantity + 1);
  const handleMinusQuantity = () =>
    setQuantity(quantity <= 1 ? 1 : quantity - 1);

  const handleChangeQuantity = (e) =>
    setQuantity(
      e.target.value === ""
        ? 1
        : parseInt(e.target.value) <= 1
        ? 1
        : parseInt(e.target.value)
    );

  const [description, setDescription] = useState("");

  const handleChangeDescription = (e) => setDescription(e.target.value);

  const handleAddProductToOrder = () => {
    handleAddItemToOrder({
      id: item.id,
      title: item.title,
      quantity: quantity,
      description: description,
    });
    handleClose();
  };

  return (
    <div>
      <Card
        as={Button}
        disabled={isLoading}
        variant="light"
        className="w-100 m-1"
        onClick={handleShow}
      >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row xs={3} sm={3} md={3} lg={3} xl={3}>
              <Col>
                <Button
                  variant="secondary"
                  className="w-100"
                  onClick={handleMinusQuantity}
                >
                  <Dash />
                </Button>
              </Col>
              <Col>
                <Form.Group controlId="cantidad">
                  <Form.Control
                    className="text-center"
                    type="number"
                    placeholder="Cantidad..."
                    min={1}
                    value={quantity}
                    onChange={handleChangeQuantity}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={handleMoreQuantity}
                >
                  <Plus />
                </Button>
              </Col>
            </Row>

            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escriba aquí si lo necesita..."
                value={description}
                onChange={handleChangeDescription}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <X />
            Cancelar
          </Button>
          <Button variant="success" onClick={handleAddProductToOrder}>
            <Save /> Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
