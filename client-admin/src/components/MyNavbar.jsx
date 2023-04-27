import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, searchBasedCategory, searchQuery } from "../store/action/creator";

export default function MyNavbar() {
  // const [query, setQuery] = useState('')

  const navigate = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch()
  const {categories} = useSelector((state) => state.category)

  useEffect(() => dispatch(fetchCategories()),[dispatch])
  const localLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar  fixed="top" style={{backgroundColor:'rgba(0,85,148,255)', height:"65px"}}>
      <Container>
      <Navbar.Brand as={Link} to={"/"} style={{color:"white"}}>
      <img style={{width:"140px"}} src="https://static-redesign.cnbcfm.com/dist/0dbbcac4aae29ae1ab0b.svg" alt="logo" className="branding-menu-logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"} style={{color:"white"}}>
            Posts
          </Nav.Link>
          <Nav.Link as={Link} to={"/categories"} style={{color:"white"}}>
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to={"/tags"} style={{color:"white"}}>
            Tags
          </Nav.Link>
          <Nav.Link as={Link} to={"/reg"} style={{color:"white"}}>
            Register Admin
          </Nav.Link>
        </Nav>
        <InputGroup className="w-50">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="query"
            onChange={(e) => dispatch(searchQuery(e.target.value)) }
            
          />
          <Form.Select
            defaultValue={"all"}
            name="queryByCategory"
            onChange={(e) => dispatch(searchBasedCategory(e.target.value))}
            disabled = {location.pathname === '/' ? false : true}
          >
            <option value="all">
              All
            </option>
            {categories.map((category, idx) => {
              return (
                <option value={category.id} key={idx}>
                  {category.name}
                </option>
              );
            })}
          </Form.Select>
          <Button className="me-2" variant="secondary" >
            Search
          </Button>
        </InputGroup>
        <Button variant="danger" onClick={localLogOut}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}
