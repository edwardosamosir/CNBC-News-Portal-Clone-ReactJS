import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchDetailPost, updatePost } from "../store/action/creator";
import { POSTS_ERROR, POSTS_UPDATE } from "../store/action/typeKey";
import MyModalsWrong from "../components/MyModalsWrong";


export default function EditPostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchCategories()),[dispatch])
  useEffect(() => dispatch(fetchDetailPost(postId)),[dispatch,postId])
  const [modalShow, setModalShow] = useState(false);
  const {categories} = useSelector((state) => state.category)
  const {postDetail, loadingStatus, errorMessage, updateStatus } = useSelector((state) => state.post)
 
  const [title, setTitle] = useState(() => "")
  const [imgUrl, setImgUrl] = useState(() => "")
  const [content, setContent] = useState(() => "")
  const [categoryId, setCategoryId] = useState(() => "");
 
  // const dispatch = useDispatch()

  useEffect(() => {
    if(postDetail){
      setTitle(postDetail.title)
      setImgUrl(postDetail.imgUrl)
      setContent(postDetail.content)
      setCategoryId(postDetail.categoryId)
    }
  },[postDetail])

  const editPost = (e) => {
    e.preventDefault();
    const objToSend = {
      title,
      imgUrl,
      content,
      categoryId
    };

    dispatch(updatePost(objToSend,postId))
  };

  useEffect(() => {
    if(updateStatus){
      navigate('/')
    }

    return () => dispatch({type : POSTS_UPDATE, payload : null})
  },[updateStatus,navigate,dispatch])
  
  useEffect(() => {
    if(errorMessage){
      setModalShow(true)
    }

    return () => dispatch({type : POSTS_ERROR, payload : ""})
  },[errorMessage,dispatch])

  // if (loadingStatus) return <h1> Loading ...</h1>;

  return (
    <Container className="w-50" style={{marginTop:"100px"}}>
      <h1>Edit post form</h1>
      <Form onSubmit={editPost}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImgUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="imgUrl"
              type="text"
              placeholder="imageUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            rows={15}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="categoryId"
              onChange={(e) => setCategoryId(e.target.value)}
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

        <Button style={{backgroundColor:'rgba(0,85,148,255)'}} type="submit">
          Submit
        </Button>
      </Form>

      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Warning!' content='All fields must be filled' />
      )}
    </Container>
  );
}
