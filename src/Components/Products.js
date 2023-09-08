import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap"; // Corrected import statement
import "bootstrap/dist/css/bootstrap.min.css"; // Added import statement
import { addToCart } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchP } from "../Store/apiSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.api);
  useEffect(() => {
    dispatch(fetchP());
  }, []);

  const add = (product) => {
    dispatch(addToCart(product));
  };

  const card = products.map((product) => (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={product.id}>
      <Card style={{ width: "auto" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            className="mt-3"
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="primary" onClick={() => add(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row m-3">{card}</div>
    </>
  );
};

export default Products;
