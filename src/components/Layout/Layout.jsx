import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Layout.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div className="Layout">
        <Header/>
        <main className='mainContainer'>
                <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout