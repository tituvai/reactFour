import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Search from './Search'

const RootLayout = () => {
  return (
    
    <>
    <Header/>
    <Search/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout