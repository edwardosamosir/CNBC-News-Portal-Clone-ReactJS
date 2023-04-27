import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingScreen() {
  return (
    <Container className='loadingContainer' style={{textAlign:"center"}}>
        <Spinner animation="border" className='iconSpinner' variant="primary" role='status'/>
    </Container>
  )
}
