import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../Actions/productAction";
import { getAllCategories } from "../Actions/categoryAction";
import { getALLSubCategories } from "../Actions/subCategoryAction";
import Button from "react-bootstrap/Button";

function DashBoard() {
  const categories = useSelector((state) => state.categoryReducer);
  const products = useSelector((state) => state.productReducer);
  const subCategories = useSelector((state) => state.subCategoryReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getALLSubCategories());
    dispatch(getAllProducts());
  }, []);

  const navigate = useNavigate();
  function CategoryManagement() {
    navigate("/CategoryManagement");
  }
  function ProductManagement() {
    navigate("/ProductManagement");
  }
  function Products() {
    navigate("/Products");
  }

  return (
    <div>
      <Navbar />

      <div className="card m-3 mt-5 ">
        <div className="row m-2 ">
          <div className="col-4">
            <p> Main Categories </p>
          </div>
          <div className="col-4">
            <p> Total {categories.length ? categories.length : 0}</p>
          </div>
          <Button
            variant="outline-success"
            className=" col-4 mt-4 "
            onClick={() => CategoryManagement()}
          >
            <p> CategoryManagement </p>{" "}
          </Button>

          <div className="col-4">
            <p> Sub-Categories </p>
          </div>
          <div className="col-4">
            <p> Total {subCategories.length ? subCategories.length : 0}</p>
          </div>
        </div>
      </div>
      <div className="card m-3 mt-5">
        <div className="row mt-5 m-2 ">
          <div className="col-4">
            <p>Products</p>
          </div>
          <div className="col-4">
            <p>Total {products.length ? products.length : 0} </p>
          </div>
          <Button
            variant="outline-success"
            className=" col-4 mb-5"
            onClick={() => ProductManagement()}
          >
            <p> Product Management </p>{" "}
          </Button>
        </div>
      </div>
      <Button
        variant="outline-primary"
        className="m-5"
        onClick={() => Products()}
      >
        Show All Products
      </Button>
    </div>
  );
}
export default DashBoard;
