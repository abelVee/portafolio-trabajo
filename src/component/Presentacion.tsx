import { FaGithub, FaLinkedin, FaEnvelope,  FaInstagram  } from "react-icons/fa";
import "./Presentacion.css";
import Perfil from "../assets/Perfil.jpg";


const Presentacion = () => {
  return (
    <section className="presentacion" id="inicio">
      {/* Foto */}
      <div className="foto-container">
        <img src={Perfil} alt="Foto de perfil" />
      </div>

      {/* Texto */}
      <h2 className="rol">Desarrollador Junior</h2>
      <h1 className="saludo">Hola, soy Desarrollador Full Stack</h1>

      <p className="descripcion">
        Soy estudiante de 8vo semestre, apasionado por el desarrollo web
        y la creación de soluciones digitales modernas.
      </p>

      {/* Botones */}
      <div className="botones">
        <a href="#contacto" className="btn principal">
          Contáctame
        </a>
        <a href="#proyectos" className="btn secundario">
          Ver proyectos
        </a>
      </div>

<div className="redes">
  <a
    href="https://github.com/abelVee"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/abelcameras"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://instagram.com/tu_usuario"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a href="mailto:camerasabel56@gmail.com" aria-label="Gmail">
    <FaEnvelope />
  </a>


</div>


    </section>
  );
};

export default Presentacion;
