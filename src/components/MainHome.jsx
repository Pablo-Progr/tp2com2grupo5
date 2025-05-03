import React from 'react'
import Aside from './Aside'
import Article from './Article'
import '../css/mainHome.css'
import LangTables from './LangTables'

const MainHome = ({lengProgramacion}) => {
  return (

    <div>
<div className="contenedorMainHome">
      <div className="aside">
        <Aside/>
      </div>
    
      <div className="article">
        <Article lengProgramacion={lengProgramacion}/>
      </div>

      
    </div>
    <div className='langTables'>
    <LangTables lengProgramacion={lengProgramacion}/>
    </div>
  
    </div>
    

  )
}



export default MainHome