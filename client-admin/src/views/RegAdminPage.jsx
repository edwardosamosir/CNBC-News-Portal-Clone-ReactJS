import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import {baseUrl} from "../config/api"
export default function RegAdminPage() {

    const navigate = useNavigate()

    const [showAlert, setShowAlert] = useState(() => false)
    const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeHandler = (event) => {
    // console.log(event)
    const obj = { ...userData, [event.target.name]: event.target.value };
    // console.log(obj)
    setUserData(obj);
  };

  const submitTheValue = (event) => {
    event.preventDefault();
    // console.log(userData)

    if(!userData.email) {
      setErrorMessage('Email cannot be empty!')
      setShowAlert(true)
      return
    }
    if(!userData.password) {
      setErrorMessage('Password cannot be empty!')
      setShowAlert(true)
      return
    }

    if(userData.password.length < 5){
      setErrorMessage('Password length required minimum 5 characters long')
      setShowAlert(true)
      return
    }

    const objToPass = { ...userData, role: "admin" };

    fetch(baseUrl + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token : localStorage.getItem('access_token')
      },
      body: JSON.stringify(objToPass),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // console.log(response)
          switch (response.status) {
            case 400 : throw new Error('This email is taken already!')
            default : throw new Error('Internal server error.')
          }
        }
      })
      .then((data) => {
            // console.log(data)
            navigate('/')
        })
      .catch((error) => {
        // console.log(error)
        setErrorMessage(error?.message)
        setShowAlert(true)
        return
      })
      .finally(() => {
          const afterSubmitObj = {
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
            address: "",
        };  
        setUserData(afterSubmitObj);
      })
  };

  return (
    <Container style={{width : '700px', marginTop:"100px"}}>
      <h2>Add New Admin</h2>
      {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
      <Form onSubmit={submitTheValue}>
        <Form.Group className="mb-3" controlId="addUserForm.username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="username"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addUserForm.email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addUserForm.password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="password"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addUserForm.phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addUserForm.address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            type="text"
            placeholder="address"
            onChange={changeHandler}
          />
        </Form.Group>
        <Button type="submit" style={{backgroundColor:'rgba(0,85,148,255)'}}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
