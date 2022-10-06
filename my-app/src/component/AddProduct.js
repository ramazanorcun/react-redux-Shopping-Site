import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getALLSubCategories } from "../Actions/subCategoryAction";
import { addProduct } from "../Actions/productAction";

function AddProduct() {

  
  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.subCategoryReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [subCategoryId, setSubCategoryId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [file,setFile]=useState();

  const handleChangeSubId = (e) => {
    setSubCategoryId(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeName = (e) => {

    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.value);
    console.log(e.target.value);
  };

  const changeProduct = (e) => {
   
    dispatch(addProduct(name,subCategoryId,price,file));
  };

  useEffect(() => {
    if (Object.keys(subCategories).length === 0) {
      dispatch(getALLSubCategories());
    }
  }, []);

  return (
    <div>
      <Button
        className="w-100 btn-info"
        style={{ backgroundColor: "aliceblue" }}
        onClick={handleShow}
      >
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Label> Sub Categories </Form.Label>
            <Form.Select
              name="sub_category_id"
              aria-label="Default select example"
              className="mb-2"
              onChange={handleChangeSubId}
            >
              <option hidden>Sub Category</option>
              {subCategories?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Label> Add Product </Form.Label>
            <Input
              type="text"
              className="form-control mb-2"
              required
              name="name"
              id="name"
              placeholder="Add Product"
              onChange={handleChangeName}
            />
            <Form.Label> Price $</Form.Label>
            <Input
              type="text"
              className="form-control mb-2"
              required
              name="price"
              id="price"
              placeholder="Price $"
              onChange={handleChangePrice}
            />

            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple name="images[]"
            onChange={handleFile}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={changeProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProduct;
