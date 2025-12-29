import { useState } from "react";
import "./Proyecto.css";

import woliseaImg from "../assets/1Wolisea.png";
import portafolioImg from "../assets/Portafolio.png";
import ecotapImg from "../assets/Ecotap.png";
import maquinaExpendedoraImg from "../assets/MaquinaExpendora.jpg";

import { FaGithub, FaYoutube } from "react-icons/fa";

const proyectos = [
  {
    titulo: "Portafolio Personal",
    descripcion:
      "Portafolio web para mostrar perfil profesional, habilidades y proyectos.",
    tecnologias: ["HTML", "CSS", "TypeScript", "React"],
    imagen: portafolioImg,
    github: "https://github.com/abelVee/portafolio-trabajo",
    youtube: "https://youtu.be/UMvnv0MMXT0?si=j6K_qmBj3MGzj1xu",
  },
  {
    titulo: "1Wolisea",
    descripcion:
      "1Wolisea es un juego educativo para iPad, participante en el Student Channel 2025, que promueve la conciencia ambiental en niños.",
    tecnologias: ["SwiftUI", "Playground", "Inkscape", "Xcode"],
    imagen: woliseaImg,
    github: "https://github.com/abelVee/1Wolisea",
    youtube: "https://youtu.be/6pdjY0aFY8k?si=q_nvkGPD3aOmKdVH",
  },
  {
    titulo: "Ecotap",
    descripcion:
      "Ecotap es una aplicación móvil desarrollada en equipo que aborda la problemática de los residuos sólidos promoviendo la economía circular. Fue un proyecto ganador que obtuvo el pase a la etapa nacional del Hackatón Guadalajara.",
    tecnologias: ["SwiftUI", "Figma", "Xcode","Swift"],
    imagen: ecotapImg,
    github: "https://github.com/abelVee/EcoTap",
    youtube: "https://youtube.com/shorts/6rR-y1w7mhI?si=2HbfxZCDfLnoBu-Q",
  },
  {
    titulo: "Maquina expendedora de útiles escolares",
    descripcion:
      "Se creo una máquina expendedora de útiles escolares desarrollada en equipo para la Semana de la Ciencia. Combina hardware y software: la interfaz en Java permite la interacción con el usuario y la computadora, mientras que el Arduino controla los movimientos de la máquina mediante programación en C, creando un sistema autómata totalmente funcional.",
    tecnologias: ["Java", "Arduino", "C"],
    imagen: maquinaExpendedoraImg,
    github: "#",
    youtube: "https://youtube.com/shorts/U3YXg81pjgY?si=1aDP95Wpo2sTJctr",
  }
];

const Proyecto = () => {
  const [verMas, setVerMas] = useState(false);

  const proyectosVisibles = verMas ? proyectos : proyectos.slice(0, 4);

  return (
    <section className="proyectos" id="proyectos">
      <h2 className="titulo-proyectos">Mi trabajo</h2>

      <h3 className="subtitulo-proyectos">
        Proyectos destacados
        <span className="linea-azul"></span>
      </h3>

      <div className="contenedor-proyectos">
        {proyectosVisibles.map((proyecto, index) => (
          <div className="tarjeta-proyecto" key={index}>
            {/* Imagen */}
            <div className="contenedor-imagen">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="imagen-proyecto"
              />

              {/* Overlay */}
              <div className="overlay">
                {proyecto.github && proyecto.github !== "#" && (
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Repositorio GitHub"
                  >
                    <FaGithub />
                  </a>
                )}

                {proyecto.youtube && proyecto.youtube !== "#" && (
                  <a
                    href={proyecto.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Video en YouTube"
                  >
                    <FaYoutube />
                  </a>
                )}
              </div>
            </div>

            <div className="header-proyecto">
              <span className="icono">📁</span>
              <h4>{proyecto.titulo}</h4>
            </div>

            <p className="descripcion-proyecto">{proyecto.descripcion}</p>

            <div className="tecnologias">
              {proyecto.tecnologias.map((tec, i) => (
                <span key={i}>{tec}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver Más */}
      {proyectos.length > 4 && (
        <button
          className="btn-ver-mas"
          onClick={() => setVerMas(!verMas)}
        >
          {verMas ? "Ver menos" : "Ver más proyectos"}
        </button>
      )}
    </section>
  );
};

export default Proyecto;
