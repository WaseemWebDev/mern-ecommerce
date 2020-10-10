import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { addToCart } from "../store/globalCart";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => {
    return state.counter.cart;
  });

  useEffect(() => {
    function getProducts() {
      axios
        .get("/allproducts", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then(function (response) {
          setProducts(response.data.productData);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getProducts();
  }, []);
  function addProducts(product) {
    const found = cartItem.find((item) => {
      return item._id === product._id;
    });
    if (found) {
      alert("item already exist");
    } else {
      dispatch(addToCart(product));
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <center>
            <h2>Products</h2>
          </center>

          {products.map((product, index) => {
            return (
              <Col key={product._id} md={3} className="ml-4 mr-4">
                <br /> <br /> <br />
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.price}
                      <br />
                      {product.description}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        addProducts(product);
                      }}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
