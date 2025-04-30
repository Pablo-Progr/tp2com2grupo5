import React from 'react'
import Aside from './Aside'
import Article from './Article'
import '../css/mainHome.css'

const MainHome = ({lengProgramacion}) => {
  

  return (
    <div className="contenedorMainHome">
      <div className="aside">
        <Aside/>
      </div>
      <div className="article">
        <Article lengProgramacion={lengProgramacion}/>
      </div>
    </div>
  )
}

export default MainHome