import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import MyTag from "../components/MyTag";
import { fetchTags } from "../store/action/creator";
import LoadingScreen from "../../../client-user/src/components/LoadingScreen";


export default function TagsPage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTags()), [dispatch]);
  const { searchQuery } = useSelector((state) => state.custom);
  const { tags, loading } = useSelector((state) => state.tag);

  return (
    <Container style={{marginTop:"100px"}}>

    { loading ? <LoadingScreen /> : (
      <>
        <h1>Table of Tags</h1>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th style={{width : '50%'}}>News</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {tags
              .filter((el) =>
                el.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((tag, index) => {
                return <MyTag tag={tag} key={tag.id} index={index} />;
              })}
          </tbody>
        </Table>
      </>
      )}
      <br />  
    </Container>
  );
}


