import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <div>
            <Header />
            <hr className="bg-gray-500" />
            <Outlet />
            <Footer />
        </div >
    )
}

export default Layout