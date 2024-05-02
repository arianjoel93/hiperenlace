import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Layout.scss"
import Header from '../Header/Header'

const Layout = () => {
  return (
    <div className="Layout">
        <Header/>
        <main className='mainContainer'>
                <Outlet />
        </main>
    </div>
  )
}

export default Layout