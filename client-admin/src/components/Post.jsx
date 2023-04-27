import React from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

export default function Post({ post, index }) {

  return (
    <tr>
      <td>{++index}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>{post.Category?.name || post.categoryId}</td>
      <td><img src={post.imgUrl} width="100" alt="img"></img></td>
      <td>
        <div className="d-flex gap-2">
          <Link to={`/posts/edit/${post.id}`}>
            <Button variant="secondary" >Edit</Button>
          </Link>
          <Link to={`/posts/delete/${post.id}`}>
            <Button variant="danger" >Delete</Button> 
          </Link>
        </div>
      </td>
    </tr>
  );
}
