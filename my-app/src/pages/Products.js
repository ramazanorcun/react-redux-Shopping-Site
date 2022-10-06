/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col } from "reactstrap";
import { getAllProducts } from "../Actions/productAction";
import Navbar from "../component/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { addToCartAction } from "../Actions/cartAction";
import { toast, ToastContainer } from "react-toastify";

const Products = () => {
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addToCartAction(product));
    toast.success(`${product.name} Added to cart `);
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer position="bottom-right" />
      <div className="container">
        <div className=" row m-3">
          <div className="col-4 ">
            <DropdownButton className="w-100 btn-info " title="Filter Products">
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="col-8  d-flex justify-content-end">
            <input
              type="search"
              placeholder="Search"
              style={{ backgroundColor: "aliceblue" }}
            />
          </div>
        </div>

        <div className="row mt-4">
          {products &&
            products.map((product, i) => (
              <div className="col-12 col-sm-6 col-xl-3 mt-3">
                <div className="card text-center h-100">
                  <div className="card-body" key={i}>
                    <Row>
                      <Col>
                        <img
                          alt="Card image"
                          src={product.image_path}
                          className="img-fluid rounded"
                        />
                        <Row>
                          <Col>{product.name}</Col>
                        </Row>
                        <Row>
                          <Col>{"$" + product.price}</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-footer text-muted fst-italic">
                    <Button
                      className="btnrenk"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
