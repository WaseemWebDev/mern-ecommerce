import React from 'react'

  import Button from "react-bootstrap/Button";
  import Col from "react-bootstrap/Col";
  import Card from "react-bootstrap/Card";
  import {  useDispatch } from "react-redux";
  import {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } from "../store/globalCart";
export default function CartItems({item , index}) {
    const dispatch = useDispatch();
    return (
        <>
        <Col key={item._id} md={4}>
        <br />
        <br />
        <Card className="text-center">
          <Card.Header>Cart</Card.Header>
          <img
            src={item.image}
            alt="card picture"
            className="img-fluid"
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <h6>price : {item.price}</h6>

            <Button
              variant="danger"
              onClick={() => {
                dispatch(removeItem(item._id));
              }}
            >
              remove from cart
            </Button>
            <br />
            {item.defaultQuantity}

            <Button
              variant="success"
              onClick={() => {
                dispatch(increaseQuantity(index));
              }}
            >
              +
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(decreaseQuantity(index));
              }}
            >
              -
            </Button>
          </Card.Body>
        </Card>
      </Col>
        </>
    )
}
