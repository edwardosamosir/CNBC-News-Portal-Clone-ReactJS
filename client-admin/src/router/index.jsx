import React from 'react'
import {createBrowserRouter, redirect } from 'react-router-dom'
import AddCategoryPage from '../views/AddCategoryPage'
import AddPostPage from '../views/AddPostPage'
import CategoriesPage from '../views/CategoriesPage'
import DashboardPage from '../views/DashboardPage'
import DeleteCategoryPage from '../views/DeleteCategoryPage'
import DeletePage from '../views/DeletePage'
import EditCategoryPage from '../views/EditCategoryPage'
import EditPostPage from '../views/EditPostPage'
import Layout from '../views/Layout'
import LoginPage from '../views/LoginPage'
import RegAdminPage from '../views/RegAdminPage'
import TagsPage from '../views/TagsPage'

const router = createBrowserRouter([
    {
        element : <Layout />,
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(!token) throw redirect ('/login')
            return null
        },
        children : [
            {
                path : "/",
                element : <DashboardPage />
            },
            {
                path : "/posts/add",
                element : <AddPostPage />
            },
            {
                path : "/posts/edit/:postId",
                element : <EditPostPage />
            },
            {
                path : "/posts/delete/:postId",
                element : <DeletePage />
            },
            {
                path : "/categories",
                element : <CategoriesPage />
            },
            {
                path : "/categories/add",
                element : <AddCategoryPage />
            },
            {
                path : "/categories/edit/:categoryId",
                element : <EditCategoryPage />
            },
            {
                path : "/categories/delete/:categoryId",
                element : <DeleteCategoryPage />
            },
            {
                path : "/tags",
                element : <TagsPage />
            },
            {
                path : "/reg",
                element : <RegAdminPage />
            }
        ]
    },
    {
        path : '/login',
        loader : () => {
            const token = localStorage.getItem('access_token')
            if(token) throw redirect ('/')
            return null
        },
        element : <LoginPage />
    }
])

export default router