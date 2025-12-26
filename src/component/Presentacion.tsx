import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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
      <h1 className="saludo">Hola, soy Desarrollador</h1>

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

{/* Redes sociales */}
<div className="redes">
  <a
    href="https://github.com/tuusuario"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/tuusuario"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:correo@gmail.com" aria-label="Gmail">
    <FaEnvelope />
  </a>

  <a href="tel:+521000000000" aria-label="Teléfono">
    <FaPhoneAlt />
  </a>
</div>

    </section>
  );
};

export default Presentacion;
