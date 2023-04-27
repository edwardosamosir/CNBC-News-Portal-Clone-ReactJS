import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default function MyModalsWrong(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="text-danger">{props.title || 'Title'}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.content || 'Content'}</h4>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}
