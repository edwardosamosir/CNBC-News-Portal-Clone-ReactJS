import React from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import dateFormatter from "../helpers/dateFormatter";

export default function Category({ category, index, deleteCategory }) {

  return (
    <tr>
      <td>{++index}</td>
      <td>{category.name}</td>
      <td>{dateFormatter(category.createdAt)}</td>
      <td>{dateFormatter(category.updatedAt)}</td>
      <td>
        
        <Link to={`/categories/edit/${category.id}`}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <Link to={`/categories/delete/${category.id}`} style={{marginLeft : '1rem'}}>
            <Button variant="danger">Delete</Button>
          </Link>
      </td>
    </tr>
  );
}
