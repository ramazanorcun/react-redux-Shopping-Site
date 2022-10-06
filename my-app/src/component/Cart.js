import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  const navigate = useNavigate();
  function cart() {
    navigate("/ShoppingCart");
  }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Cart Shopping
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          {cartItems?.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.name}
              </Dropdown.Item>
          ))}

          <Dropdown.Divider />
          <Dropdown.Item active onClick={() => cart()}>
            Your Cart
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Dropdown>

         
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
            {
                cartItems?.map((cartItem)=>(
                    <Dropdown.Item>
                   {cartItem.product.productName}
                  </Dropdown.Item>
                ))
            }
         
          <Dropdown.Divider />
          <Dropdown.Item onClick={()=>cart()} >Separated link</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> */}
    </div>
  );
}

export default Cart;
