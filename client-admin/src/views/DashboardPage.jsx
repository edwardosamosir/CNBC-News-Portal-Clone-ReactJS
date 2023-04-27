import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Post from "../components/Post";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/action/creator";
import LoadingScreen from "../../../client-user/src/components/LoadingScreen";

export default function DashboardPage() {
  const dispatch = useDispatch();

  const { searchQuery, categoryBasedQuery } = useSelector(
    (state) => state.custom
  );
  // useEffect(() => console.log(categoryBasedQuery),[categoryBasedQuery])
  useEffect(() => dispatch(fetchPost()), [dispatch]);
  const { posts, loading } = useSelector(
    (state) => state.post
  );

  return (
    <Container style={{marginTop:"100px"}}>

    { loading ? <LoadingScreen /> : (
      <>
        <h1>Table of Posts</h1>
        <div className="myButton" style={{marginBottom:"5px", textAlign: "right" }}>
          <Button as={Link} to={"/posts/add"} style={{backgroundColor:'rgba(0,85,148,255)'}}>
            + Add Post With Tags
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th style={{ width: "20%" }}>Title</th>
              <th style={{ width: "40%" }}>Content</th>
              <th style={{ width: "10%" }}>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts
              .filter((el) =>
                el.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .filter(
                (el) => (el.categoryId.toString() === categoryBasedQuery || categoryBasedQuery === 'all')
              )
              .map((post, index) => {
                return <Post post={post} key={post.id} index={index} />;
              })}
          </tbody>
        </Table>

      </>
      )}

      <br />
    </Container>
  );
}
