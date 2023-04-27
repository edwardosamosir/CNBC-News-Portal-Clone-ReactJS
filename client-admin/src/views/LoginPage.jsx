import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import { baseUrl }  from "../config/api";


export default function LoginPage() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // console.log({email, password})

  const localSetLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Email is required!");
      setShowAlert(true);
      return;
    }

    if (!password) {
      setErrorMessage("Password is required!");
      setShowAlert(true);
    }

    const obj = {
      email,
      password,
    };
    setLoading(true);
    fetch(baseUrl + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          return response.json();
        } else {
          // console.log(response)
          switch (response.status) {
            case 401:
              throw new Error("Wrong email or password!");
            default:
              throw new Error("Internal server error");
          }
        }
      })
      .then((data) => {
        // console.log(data)
        const { access_token } = data;
        localStorage.setItem("access_token", access_token);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error?.message);
        setShowAlert(true);
        return;
      })
      .finally((_) => {
        setLoading(false);
      });
  };

  return (
    <>
    
    <Container className="w-25" style={{ marginTop:"5%", backgroundColor:'rgba(0,85,148,255)', padding:"40px", borderRadius:"7px"}}> 
    <div style={{textAlign:"center"}}>
    <img style={{width:"210px"}} src="https://static-redesign.cnbcfm.com/dist/0dbbcac4aae29ae1ab0b.svg" alt="logo" className="branding-menu-logo" />
    </div>
    <h3 style={{textAlign:"center", marginTop:"7%", color:"white"}}>Content Management System</h3>
    <br/>
      <h3 style={{color:"white", textAlign:"center" , marginTop:"1%"}}>Login</h3>
      {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
      <Form onSubmit={localSetLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color:"white"}}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color:"white"}}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" disabled={loading} style={{backgroundColor:"grey"}}>
          {loading && <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
              &nbsp;
          </>
          }
          {!loading && <span>Submit</span>}
          {loading && <span>Loading ...</span>}
        </Button>
      </Form>
    </Container>
    </>
  );
}
