import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction } from "../Actions/categoryAction";
import { DeleteSubCategoriesAction } from "../Actions/subCategoryAction";

function DeleteCategoryModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categories = useSelector((state) => state.categoryReducer);
  const subCategories = useSelector((state) => state.subCategoryReducer);
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();


  const handleCategory =(e)=>{
    setCategoryId(e.target.value)
    console.log(e.target.value);
  }
  const HandleSubCategory = (e)=> {
    setSubCategoryId(e.target.value)
    console.log(e.target.value);
  }
  const deleteCategory =(e)=>{
    console.log(categoryId);
    // console.log(subCategoryId);
    dispatch(deleteCategoryAction(categoryId))
    // dispatch(DeleteSubCategoriesAction(subCategoryId))
    
  }
 

  return (
    <div>
      <Button className=" " variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label> Select Parent Category </Form.Label>
          <Form.Select
            name="category_id"
            aria-label="Default select example"
            required
            value={categoryId}
            onChange={handleCategory}
          >
            <option hidden>Parent Category</option>
            {categories?.map((category, i) => (
              <option key={i} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          <Form.Label> Select Sub Category </Form.Label>
          <Form.Select
            name="sub_category_id"
            aria-label="Default select example"
            required
            value={subCategoryId}
            onChange={HandleSubCategory}
          >
            <option hidden>Sub Category</option>
            {subCategories?.map((subCategory, i) =>
              parseInt(categoryId) === subCategory.category_id ? (
                <option key={i} value={subCategory.id}>
                  {subCategory.name}
                </option>
              ) : null
            )}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteCategoryModal;
