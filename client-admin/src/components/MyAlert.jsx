import React from "react";
import Alert from "react-bootstrap/Alert";

export default function MyAlert({title, setShow}) {
  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      {title}
    </Alert>
  );
}
