import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config/api";

export default function DeletePage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const deleteHandler = (event) => {
    event.preventDefault();
    fetch(`${baseUrl}posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something is wrong");
        }
      })
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height : '70vh'}}>
        <div>
            <Card className="text-center" style={{width :'17rem'}}>
                <Card.Header>Warning</Card.Header>
                <Card.Body>
                <Card.Title>Are You sure?</Card.Title>
                    <div className="d-flex gap-2 justify-content-center">
                        <Button style={{backgroundColor:'rgba(0,85,148,255)'}} onClick={deleteHandler}>Yes</Button>
                        <Link to={'/'}><Button variant="danger">No</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    </Container>
  );
}
