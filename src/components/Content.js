import React, { useEffect, useState } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import API from "../api";
import Order from "./Order";
import Products from "./Products";

const Content = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);

  const handleAddItemToOrder = (item) => setOrder([...order, { item }]);
  const handleRemoveItemToOrder = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const PostOrder = async () => {
    setIsLoading(true);
    // eslint-disable-next-line no-unused-vars
    const { ok, data } = await API.orders.postOrder({ products: order });
    if (ok) {
      setOrder([]);
      setIsLoading(false);
      setShowSuccessToast(true);
    } else {
      setIsLoading(false);
      setShowErrorToast(true);
    }
  };

  useEffect(() => {
    const GetProducts = async () => {
      const { ok, data } = await API.products.getProducts();
      if (!ok) console.error(ok.message);
      setProducts(data);
    };
    GetProducts();
  }, []);

  return (
    <div>
      <Toast
        onClose={() => setShowSuccessToast(false)}
        show={showSuccessToast}
        delay={5000}
        autohide
        className="border border-success"
        style={{
          position: "absolute",
          bottom: "1em",
          left: "1em",
          width: "320px",
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">¡Completado!</strong>
          <small>Ahora mismo</small>
        </Toast.Header>
        <Toast.Body>Orden realizada con éxito.</Toast.Body>
      </Toast>
      <Toast
        onClose={() => setShowErrorToast(false)}
        show={showErrorToast}
        delay={5000}
        autohide
        className="border border-danger"
        style={{
          position: "absolute",
          bottom: "1em",
          left: "1em",
          width: "320px",
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">¡Algo ha ido mal!</strong>
          <small>Ahora mismo</small>
        </Toast.Header>
        <Toast.Body>
          La orden no se ha podido procesar, inténtelo nuevamente.
        </Toast.Body>
      </Toast>
      <Container fluid>
        <Row xs={1} sm={1} md={2} lg={2} xl={2}>
          <Col xs={12} sm={4} md={3} lg={3} xl={3}>
            <Order
              items={order}
              handleRemoveItemToOrder={handleRemoveItemToOrder}
              postOrder={PostOrder}
              isLoading={isLoading}
            />
          </Col>
          <Col xs={12} sm={8} md={9} lg={9} xl={9}>
            <Products
              items={products}
              handleAddItemToOrder={handleAddItemToOrder}
              isLoading={isLoading}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
