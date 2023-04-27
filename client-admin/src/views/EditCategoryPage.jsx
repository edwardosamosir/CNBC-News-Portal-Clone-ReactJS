import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, updateCategory } from "../store/action/creator";
import {
  CATEGORIES_CREATE,
  CATEGORIES_CREATE_ERROR,
  CATEGORIES_SET_TO_DEFAULT,
  CATEGORIES_UPDATE,
} from "../store/action/typeKey";
import MyModalsWrong from "../components/MyModalsWrong";

export default function EditCategoryPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CATEGORIES_CREATE_ERROR, payload: "" });
    dispatch({ type: CATEGORIES_CREATE, payload: null });
    dispatch({ type: CATEGORIES_UPDATE, payload: null });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [categoryId, dispatch]);
  const { categoryDetail, loadingStatus, errorMessage, updateStatus } =
    useSelector((state) => state.category);
  const [modalShow, setModalShow] = useState(false);
  // console.log(categoryDetail)
  useEffect(() => {
    if (categoryDetail !== null) {
      setName(categoryDetail.name);
    }
  }, [categoryDetail]);

  const editHandler = (e) => {
    e.preventDefault();

    dispatch(updateCategory({ name }, categoryId));
  };

  useEffect(() => {
    if (updateStatus) {
      navigate("/categories");

      return () => dispatch({ type: CATEGORIES_SET_TO_DEFAULT, payload: null });
    }
  }, [updateStatus, navigate, dispatch]);

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true);
    }

    return () => dispatch({ type: CATEGORIES_CREATE_ERROR, payload: "" });
  }, [errorMessage, dispatch]);

  // if (errorMessage) return <h1> {errorMessage}</h1>;
  // if (loadingStatus) return <h1> Loading ...</h1>;

  return (
    <Container className="w-50" style={{marginTop:"100px"}}>
      <h1> Edit category </h1>
      <Form onSubmit={editHandler}>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button style={{backgroundColor:'rgba(0,85,148,255)'}} type="submit">
          Submit
        </Button>
      </Form>

      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Warning!' content='Category name cannot be empty' />
      )}
    </Container>
  );
}
