import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost, fetchCategories } from "../store/action/creator";
import { POSTS_ADD_RESPONSE, POSTS_ERROR } from "../store/action/typeKey";
import MyModalsWrong from "../components/MyModalsWrong";
export default function AddPostPage() {
  const [postData, setPostData] = useState({
    title: "",
    imgUrl: "",
    content: "",
    categoryId: "1",
    tag: "",
    tag2: "",
    tag3: ""
  });

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => dispatch(fetchCategories()), [dispatch]);
  const { categories } = useSelector((state) => state.category);
  const { postResponse, loadingStatus, errorMessage } = useSelector((state) => state.post)
  const navigate = useNavigate();

  const postDataHandler = (event) => {
    const { name, value } = event.target;
    const obj = { ...postData, [name]: value };
    // console.log(obj);
    setPostData(obj);
  };

  useEffect(() => {
    dispatch({type : POSTS_ADD_RESPONSE, payload : null})
    dispatch({type : POSTS_ERROR, payload : ""})
  }, [dispatch]);

  const submitNewPost = (event) => {
    event.preventDefault();
    const {tag, tag2, tag3, ...restData} = postData

    const objToPass = {
      ...restData,
      tags : [tag, tag2, tag3]
    }

    dispatch(addPost(objToPass))
    
  };

  useEffect(() => {
    if(postResponse){
      navigate('/')
    }
  },[navigate,postResponse])

  useEffect(() => {
    if(errorMessage){
      setModalShow(true)
    }

    return () => dispatch({type : POSTS_ERROR, payload : ""})
  },[errorMessage,dispatch])

  // if (loadingStatus) return <h1> Loading ...</h1>;

  return (
    <Container className="w-50" style={{marginTop:"100px"}}>
      <h1>Add Post Form</h1>
      <Form onSubmit={submitNewPost}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Title"
              onChange={postDataHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImgUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="imgUrl"
              type="text"
              placeholder="imageUrl"
              onChange={postDataHandler}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            rows={15}
            onChange={postDataHandler}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="categoryId"
              onChange={postDataHandler}
            >
              <option value={0} disabled>
                Choose...
              </option>
              {categories.map((category, idx) => {
                return (
                  <option value={category.id} key={idx}>
                    {category.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Tag 1</Form.Label>
            <Form.Control
              name="tag"
              type="text"
              placeholder="Tag 1"
              onChange={postDataHandler}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Tag 2</Form.Label>
            <Form.Control
              name="tag2"
              type="text"
              placeholder="Tag 2"
              onChange={postDataHandler}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Tag 3</Form.Label>
            <Form.Control
              name="tag3"
              type="text"
              placeholder="Tag 3"
              onChange={postDataHandler}
            />
          </Form.Group>
        </Row>

        <Button style={{backgroundColor:'rgba(0,85,148,255)'}} type="submit">
          Submit
        </Button>
      </Form>

      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Warning!' content='Internal server error' />
      )}
    </Container>
  );
}
