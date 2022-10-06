import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Input } from "reactstrap";
import { addParentCategoryAction } from "../Actions/categoryAction";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";


function AddParentModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName]=useState(); 
 
  const dispatch = useDispatch();
  //add category
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  

  const addCategory = (e) => {
    e.preventDefault();
    
    if (name) {
      dispatch(addParentCategoryAction(name))
        .then((data) => {
        })
        // .catch()
        .then(() => {
          handleClose();
        });
    } else {
      
      alert("gerekli alanlar boş olamaz");
    }
  };
  return (
    <div>
      <Button
        className="w-100 btn-info"
        style={{ backgroundColor: "aliceblue" }}
        onClick={handleShow}
      >
        Add Parent Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Parent Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form.Label>Add Parent Category </Form.Label>
          <Input
            type="text"
            className="form-control"
            required
            name="name"
            id="catId"
            onChange={onChangeName}
            placeholder="add parent category"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={addCategory}>
            Add
          </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddParentModal;
