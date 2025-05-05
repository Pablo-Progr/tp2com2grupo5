import React from "react";
import giuliano from "../assets/giuliano.jpeg";
import pablo from "../assets/pablo.jpg";
import jeremias from "../assets/jeremias.jpeg";
import matias from "../assets/matias.png";
import "../css/mainNosotros.css";

const MainNosotros = () => {
  return (
    <div className="contenedorArticle">
      <div className="card">
        <img src={giuliano} alt="" />
        <h6>
          Mi nombre es Giuliano Calcagni terngo 19 anios, por el momento solo soy estudiante de la carrera de Tec. Universitaria en Programacion.
        </h6>
      </div>
          <div className="card">
        <img src={pablo} alt="" />
        <h6>
          Mi nombre es Pablo tengo 25 anios y soy estudiante de la carrera de Tec. Universitaria en Programacion y aparte trabajo en un gimnasio.
        </h6>
      </div>
          <div className="card">
        <img src={jeremias} alt="" />
        <h6>
            Mi nombre es Jeremias Alvarez tengo 23 anios y soy estudiante de la carrera de Tec. Universitaria en Programacion y trabajo en un Instituto Terciario.
        </h6>
      </div>
          <div className="card">
        <img src={matias} alt="" />
        <h6>
            Mi nombre es MatiasRoldan tengo 23 y soy estudiante de la carrera de Tec. Universitaria en Programacion, Me gustan mucho los videos juegos y la tecnologia.y aparte trabajo con mi familia siendo ferianrtes.
        </h6>
      </div>
    </div>
  );
};

export default MainNosotros;
