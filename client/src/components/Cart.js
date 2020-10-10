import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../store/globalCart";
import CartItems from "./CartItems";

import axios from "axios";
export default function Cart() {
  const publishableKey =
    "";
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => {
    return state.counter.cart;
  });

  function totalCartPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cartItem.length; i++) {
      totalPrice += cartItem[i].price * 1 * cartItem[i].defaultQuantity;
    }
    return totalPrice;
  }
  const onToken = (token) => {
    const body = {
      amount: totalCartPrice() * 100,
      token: token,
    };
    axios
      .post("/payment", body, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response);
        alert("Payment Success");
        if (response) {
          dispatch(clearCart());
        }
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <div>
      <Container>
        <br />
        <Card style={{ maxWidth: "400px", float: "right" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              {!cartItem.length && (
                <b style={{ float: "right" }}>Cart is empty</b>
              )}
              {cartItem.length ? (
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(clearCart());
                  }}
                >
                  Empty Cart
                </Button>
              ) : null}
            </Card.Title>
            <Card.Text>
              {cartItem.length ? <b>total items : {cartItem.length}</b> : null}
              <br />
              <br />
            </Card.Text>
            <Card.Text>
              {cartItem.length ? <b>Total Price : {totalCartPrice()}</b> : null}
              {cartItem.length ? (
                <StripeCheckout
                  label="Pay with stripe" //Component button text
                  name="Business LLC" //Modal Header
                  description="Upgrade to a premium account today."
                  panelLabel="Pay Now" //Submit button in modal
                  amount={totalCartPrice() * 100} //Amount in cents $9.99
                  token={onToken}
                  currency="USD"
                  stripeKey={publishableKey}
                  // image="https://www.vidhub.co" //Pop-in header image
                  billingAddress={false}
                />
              ) : null}
            </Card.Text>
          </Card.Body>
        </Card>

        <Row>
          {cartItem.map((item, index) => {
            return <CartItems item={item} index={index} key={item._id} />;
          })}
        </Row>
      </Container>
    </div>
  );
}
