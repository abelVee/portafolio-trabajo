import "./Contacto.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";


const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      {/* Títulos */}
      <h2 className="titulo-contacto">Hablemos</h2>

      <h3 className="subtitulo-contacto">
        Contáctame
        <span className="linea-azul"></span>
      </h3>

      {/* Introducción */}
      <p className="pregunta">¿Tienes un proyecto en mente?</p>

      <p className="descripcion-contacto">
        Estoy disponible para oportunidades de trabajo, prácticas profesionales
        o colaboraciones en proyectos interesantes. ¡No dudes en contactarme!
      </p>

      {/* Tarjetas de contacto */}
      <div className="tarjetas-contacto">
        <div className="tarjeta-contacto">
          <div className="icono-box">
            <FaEnvelope />
          </div>
          <div className="info-contacto">
            <span className="titulo-info">Email</span>
            <span className="dato">camerasabel56@gmail.com</span>
          </div>
        </div>

        <div className="tarjeta-contacto">
          <div className="icono-box">
            <FaPhoneAlt />
          </div>
          <div className="info-contacto">
            <span className="titulo-info">Teléfono</span>
            <span className="dato">+52 962 511 4933</span>
          </div>
        </div>

        <div className="tarjeta-contacto">
          <div className="icono-box">
            <FaMapMarkerAlt />
          </div>
          <div className="info-contacto">
            <span className="titulo-info">Ubicación</span>
            <span className="dato">Chiapas, México</span>
          </div>
        </div>
      </div>

  <form className="formulario-contacto">
  <div className="campo">
    <label>Nombre</label>
    <input type="text" placeholder="Tu nombre" />
  </div>

  <div className="campo">
    <label>Email</label>
    <input type="email" placeholder="tuemail@correo.com" />
  </div>

  <div className="campo">
    <label>Asunto</label>
    <input
      type="text"
      placeholder="¿Sobre qué quieres hablar?"
      className="input-full"
    />
  </div>

  <div className="campo">
    <label>Mensaje</label>
    <textarea
      placeholder="Cuéntame sobre tu propuesta o proyecto..."
      rows={6}
    ></textarea>
  </div>

  <button type="submit">Enviar mensaje</button>
</form>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-izq">
          Creado por <strong>abelVee</strong>{" "}
          <FaHeart className="corazon" /> {new Date().getFullYear()}
        </div>

       <div className="footer-centro">
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


        <div className="footer-der">
          Todos los derechos reservados
        </div>
      </footer>
    </section>
  );
};

export default Contacto;
