import React from 'react'
import Nav from './Nav'
import '../css/header.css'

const Header = () => {
  return (
    <div className="header">
      <div className='headerContainer'>
        <h1>Trabajo Practico N2</h1>
        <h2>Comision - Grupo 5</h2>
      </div>
      <Nav />
    </div>
  );
}

export default Header