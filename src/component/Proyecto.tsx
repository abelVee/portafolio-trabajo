import { useState } from "react";
import "./Proyecto.css";
import proyectoImg from "../assets/1Wolisea.png";
import { FaGithub, FaYoutube } from "react-icons/fa";


const proyectos = [
  {
    titulo: "Portafolio Personal",
    descripcion:
      "Portafolio web para mostrar perfil profesional, habilidades y proyectos.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"],
    github: "#",
    youtube: "#",
  },
  {
    titulo: "Sistema Web",
    descripcion:
      "Aplicación web para gestión de información con enfoque en usabilidad.",
    tecnologias: ["Java", "SQL", "HTML", "CSS"],
    github: "#",
    youtube: "#",
  },
  {
    titulo: "App Educativa",
    descripcion:
      "Proyecto enfocado en el aprendizaje interactivo.",
    tecnologias: ["React", "JavaScript", "CSS"],
    github: "#",
    youtube: "#",
  },
  {
    titulo: "API REST",
    descripcion:
      "Servicios REST para consumo de datos de forma escalable.",
    tecnologias: ["Node.js", "SQL", "REST API"],
    github: "#",
    youtube: "#",
  },
  {
    titulo: "Proyecto Extra",
    descripcion:
      "Este proyecto se muestra solo al presionar ver más.",
    tecnologias: ["React", "Firebase"],
    github: "#",
    youtube: "#",
  },
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
            
            {/* Imagen con hover */}
            <div className="contenedor-imagen">
              <img
                src={proyectoImg}
                alt={proyecto.titulo}
                className="imagen-proyecto"
              />

       <div className="overlay">
  <a
    href={proyecto.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Repositorio GitHub"
  >
    <FaGithub />
  </a>

  <a
    href={proyecto.youtube}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Video en YouTube"
  >
    <FaYoutube />
  </a>
</div>

            </div>

            <div className="header-proyecto">
              <span className="icono">📁</span>
              <h4>{proyecto.titulo}</h4>
            </div>

            <p className="descripcion-proyecto">
              {proyecto.descripcion}
            </p>

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
