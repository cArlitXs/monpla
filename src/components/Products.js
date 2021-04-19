import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Product from "./Product";

const Products = ({ items, handleAddItemToOrder, isLoading }) => {
  return (
    <div>
      <h1 className="my-2 display-4">Lista de productos</h1>
      <hr />
      {items.length <= 0 ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} xl={4}>
          {items.map((item, index) => (
            <Col key={index}>
              <Product
                item={item}
                handleAddItemToOrder={handleAddItemToOrder}
                isLoading={isLoading}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
