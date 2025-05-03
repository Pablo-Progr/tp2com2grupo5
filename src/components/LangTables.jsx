

import React from 'react';

const LangTables = ({lengProgramacion}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Languaje</th>
            <th>Dificultad</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
       {lengProgramacion.map((lenguaje,index) =>  {
            const {id, nombre, dificultad, descripcion} = lenguaje;
            return (
              <tr key={index}>
              <td>{id}</td>
              <td>{nombre}</td>
              <td>{dificultad}</td>
              <td>{descripcion}</td>
            </tr>
            );
        })}
        </tbody>
      </table>
      {/* <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Languaje</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>JavaScript</td>
            <td></td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Beginner</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default LangTables;
