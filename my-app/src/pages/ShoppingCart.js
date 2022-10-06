import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Navbar from "../component/Navbar";

function ShoppingCart() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <div>
      <Navbar/>
      {cartItems?.map((cartItem) => (
        <div className="card m-3 mt-5 " key={cartItem.product.id} >
          <div className="row m-2 ">
            <div className="col-3">
              <Card.Img variant="top" src={cartItem.product.image_path} />
            </div>

            <div className="col-3 ">
              <p> {cartItem.product.name}</p>
            </div>
            <div className="col-3">
              <p> {"$" + cartItem.product.price}</p>
            </div>

            <div className="col-3">
              <p> Total price</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ShoppingCart;
