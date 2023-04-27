import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/action/creator";
import LoadingScreen from "../../../client-user/src/components/LoadingScreen";


export default function CategoriesPage() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.custom);
  useEffect(() => dispatch(fetchCategories()), [dispatch]);
  const { categories, loading } = useSelector((state) => state.category);

  return (
    <Container style={{marginTop:"100px"}}>

    { loading ? <LoadingScreen /> : (
      <>
        <br />
        <h1>Table of Categories</h1>
        <div className="myButton" style={{marginBottom:"5px", textAlign: "right" }}>
          <Button as={Link} to={"/categories/add"} style={{backgroundColor:'rgba(0,85,148,255)'}}>
            +Add Category
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories
              .filter((el) =>
                el.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((category, index) => {
                return (
                  <Category category={category} index={index} key={category.id} />
                );
              })}
          </tbody>
        </Table>
      </>
      )}

    </Container>
  );
}
