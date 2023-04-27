import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'

export default function LayoutPage() {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <MyFooter />
        </>
    )
}