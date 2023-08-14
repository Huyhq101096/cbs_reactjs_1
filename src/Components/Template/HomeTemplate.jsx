import React, { Component } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'


export default class HomeTemplate extends Component {
  render() {
    return (
      <>
      <Header />
      <main id="body" style={{minHeight: 550}}>
        <Outlet /> {/** Đại ddienj cho các component rote load */}
      </main>

      <footer className='bg-dark text-white text-center'>
        Footer cybersoft
      </footer>
        
      </>
    )
  }
}
