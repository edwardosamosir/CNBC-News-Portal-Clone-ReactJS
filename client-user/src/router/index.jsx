import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Layout from '../views/Layout'
import LandingPage from '../views/LandingPage'
import DetailPage from '../views/DetailPage'


const router = createBrowserRouter([
    {   
        path: '',
        element : <Layout />,
        children : [
            {
                path:"/",
                element: <LandingPage />
            },
            {
                path:"/detail/:postId",
                element: <DetailPage />
            }
        ]
    }
])

export default router

