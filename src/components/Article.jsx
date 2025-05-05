import React from 'react'
import '../css/article.css'


const Article = ({lengProgramacion}) => {

  return (
    <div className="contenedorArticle">
        {lengProgramacion.map((lenguaje,index) =>  {
            const {nombre, imagen, descripcion} = lenguaje;
            return (
                <div className="cardLeng" key={index}>
                    <img className='imgLeng' src={imagen} alt={nombre} />
                    <div>
                        <h2>{nombre}</h2>
                        <p>{descripcion}</p>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

export default Article