import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../store/action/creator";
import { CATEGORIES_CREATE, CATEGORIES_CREATE_ERROR } from "../store/action/typeKey";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="text-danger">Warning!!</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Category Name Cannot be empty</h4>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


export default function AddCategoryPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryDetail, loadingStatus, errorMessage } = useSelector((state) => state.category);
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const [modalShow, setModalShow] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const obj = {
      [name]: value,
    };
    // console.log(obj)
    setNewCategory(obj);
  };
  
  useEffect(() => {
    dispatch({type : CATEGORIES_CREATE_ERROR, payload : ""})
    dispatch({type : CATEGORIES_CREATE, payload : null})
  }, [dispatch]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const obtToSend = {
      ...newCategory,
    };

    dispatch(addCategory(obtToSend));
  };

  useEffect(() => {
    if(categoryDetail){
      // console.log(categoryDetail)
      navigate('/categories')
    }
  },[categoryDetail,navigate])

  useEffect(() => {
    if(errorMessage){
      setModalShow(true)
    }

    return () => dispatch({type : CATEGORIES_CREATE_ERROR, payload : ""})
  },[errorMessage,dispatch])

  // if (loadingStatus) return <h1> Loading ...</h1>;
  // if (errorMessage) return <h1> {errorMessage}</h1>;

  
  return (
    <Container className="w-50" style={{marginTop:"100px"}}>
      <h1> Add a New Category </h1>
      <Form onSubmit={submitFormHandler}>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            value={newCategory.name}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button style={{backgroundColor:'rgba(0,85,148,255)'}} type="submit">
          Submit
        </Button>
      </Form>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}
