import React from "react";
import { Alert, Button, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";

const Order = ({ items, handleRemoveItemToOrder, postOrder, isLoading }) => {
  return (
    <div>
      <h1 className="my-2 display-4">Orden</h1>
      <hr />
      <div
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        {isLoading && (
          <div
            style={{
              zIndex: "99999",
              position: "absolute",
              background: "rgba(255,255,255,1)",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Spinner animation="border" role="status" className="m-4">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
        {items.length <= 0 ? (
          <Alert variant="info">No tiene productos en la orden.</Alert>
        ) : (
          <ListGroup variant="flush">
            {items.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    xl={1}
                    className="text-left p-0 m-0"
                  >
                    <Button
                      variant="danger"
                      style={{
                        padding: "0",
                        margin: "0",
                        width: "2em",
                        height: "2em",
                      }}
                      onClick={() => handleRemoveItemToOrder(index)}
                    >
                      <X />
                    </Button>
                  </Col>
                  <Col>{item.item.title}</Col>
                  <Col
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}
                    className="text-right p-0 m-0"
                  >
                    {item.item.quantity}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <Row>
          <Col className="text-right my-2">
            {!isLoading && (
              <Button
                variant="success"
                disabled={items.length <= 0}
                onClick={postOrder}
              >
                <Check /> Completar la orden
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Order;
