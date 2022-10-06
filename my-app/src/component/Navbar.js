import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import UserInfoDrop from "./userInfoDrop.js";
import Cart from "./Cart.js";
import { useSelector } from "react-redux";

function BrandExample() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <Navbar bg="light">
        <Container>
          <UserInfoDrop />

          <Link to="/DashBoard" className="m-3">
            DashBoard
          </Link>
          <Link to="/CategoryManagement">CategoryManagement</Link>

          <Link to="/ProductManagement">ProductManagement</Link>
          <Link to="/products">Products</Link>

          {cartItems.length > 0 && <Cart />}
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
