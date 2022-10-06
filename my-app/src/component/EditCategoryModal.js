import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction, getAllCategories, putCategoryAction } from "../Actions/categoryAction";
import {
  deleteSubCategoryAction,
  getALLSubCategories,
  putSubCategory,
} from "../Actions/subCategoryAction";
import Button from "react-bootstrap/Button";
import DeleteCategoryModal from "./DeleteCategoryModal";


const Example = () => {
  const categories = useSelector((state) => state.categoryReducer);
  const subCategories = useSelector((state) => state.subCategoryReducer);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [name, setNewCategory] = useState();
  const [subName, setNewSubCategory] = useState();
  
  const toggle = () => setModal(!modal);
  // Put Category
  const handleChange = (e) => {
    setCategoryId(e.target.value);
  };
  const onChangeName = (e) => {
    const name = e.target.value;
    setNewCategory(name);
  };
  const categoryUpdate = (e) => {
    // e.preventDefault();
    dispatch(putCategoryAction(categoryId, name));
    dispatch(getAllCategories)

  };

  //Put Sub Category
  const handleSubChange = (e) => {
    const subCategoryId =e.target.value
    setSubCategoryId(subCategoryId);
  };
  
  const onChangeSubName = (e) => {
    const name = e.target.value;
    setNewSubCategory(name);
    console.log(name);
  };
  const subCategoryUpdate = (e) => {
    dispatch(putSubCategory(subCategoryId, categoryId, subName));
    dispatch(getALLSubCategories());
    
  };
 

  return (
    <div className="row">
         <div className="col-6" >
      <DeleteCategoryModal/>
      </div> 
      <div className="col-6">
      <Button variant="outline-info" onClick={toggle}>
        Edit
      </Button>
      </div>
    
      
      
      <Modal isOpen={modal} centered={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Modal</ModalHeader>
        <ModalBody>
          <Form.Label> Select Parent Category </Form.Label>
          <Form.Select
            name="main_category_id"
            aria-label="Default select example"
            required
            value={categoryId}
            onChange={handleChange}
          >
            <option hidden>Parent Category</option>
            {categories?.map((category, i) => (
              <option key={i} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          <Form.Label> Add Category </Form.Label>
          <Input
            type="text"
            className="form-control"
            required
            name="name"
            id="categoryId"
            onChange={onChangeName}
            placeholder="Add Parent Category"
          />
          <div className="mb-2 mt-2">
            <Button variant="info" onClick={categoryUpdate}>
              Update
            </Button>
          </div>
          <Form.Label> Select Parent Category </Form.Label>
          <Form.Select
            name="main_category_id"
            aria-label="Default select example"
            required
            onChange={handleChange}
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
            onChange={handleSubChange}
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

          <Form.Label> Add Sub Category </Form.Label>
          <Input
            type="text"
            className="form-control"
            required
            name="name"
            id="subCategoryId"
            onChange={onChangeSubName}
            placeholder="Add Sub Category"
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={toggle}>
            close
          </Button>
          <Button variant="info" onClick={subCategoryUpdate}>
            update
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
// 1 e 216

export default Example;
