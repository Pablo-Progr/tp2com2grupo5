import React from 'react'
import { Link } from 'react-router-dom'
import "../css/nav.css"

const Nav = () => {
  return (
    <div className="nav">
      <div className='navContainer'>
        <Link to="/sobreNosotros">Sobre Nosotros</Link>
        <a href="">FRT - UTN</a>
      </div> 
    </div>
  );
}

export default Nav