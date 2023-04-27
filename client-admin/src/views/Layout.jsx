import React from 'react'
import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'

export default function Layout() {
  return (
    <>
        <MyNavbar />
        <Container style={{marginTop : '3.5rem'}}></Container>
        <Outlet />
    </>
  )
}
