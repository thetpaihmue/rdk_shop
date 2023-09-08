import React from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap"; // Corrected import statement
import "bootstrap/dist/css/bootstrap.min.css"; // Added import statement
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const remove = (id) => {
    dispatch(removeFromCart(id));
  };
  const card = cartProducts.map((product) => (
    <div className="col-12 mb-3" key={product.id}>
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
          <Button variant="danger" onClick={() => remove(product.id)}>
            Remove from cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div>{card}</div>;
};

export default Cart;
