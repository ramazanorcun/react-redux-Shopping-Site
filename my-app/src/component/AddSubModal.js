import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import { addSubCategory, getALLSubCategories } from "../Actions/subCategoryAction";
import { getAllCategories } from "../Actions/categoryAction";

function AddSubModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch();
  const [categoryId, setCategoryId]= useState();
  const [name, setName]=useState();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getALLSubCategories());
  },[]);

  const handleChange =(e) =>{
    setCategoryId(e.target.value);
    console.log(e.target.value);
  }
  const onChangeName = (e)=>{
    setName(e.target.value)
    console.log(e.target.value);
  }
  const ekleSubCategory =(e)=>{
    dispatch(addSubCategory(categoryId,name))
    .then(() => {
      handleClose();
    });
  }

  

  const categories = useSelector((state) =>state.categoryReducer)
  return (
    <div>
       <Button
        className="w-100 btn-info"
        style={{ backgroundColor: "aliceblue" }}
        onClick={handleShow}
      >
        Add Sub Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sub Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label> Categories </Form.Label> 
         <Form.Select
              name="main_category_id"
              aria-label="Default select example"
              value={categoryId}
               onChange={handleChange}
            >
              <option hidden>Main Category</option>
              {categories?.map((item,i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
            <Form.Label className="mt-2"> Add Sub Category </Form.Label> 
          <Input
            type="text"
            className="form-control"
            required
            name="name"
            id="name"
            placeholder="Add Sub Category"
            onChange={onChangeName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={ekleSubCategory} >
            Add
          </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddSubModal
