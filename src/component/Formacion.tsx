import "./Formacion.css";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaLightbulb,
  FaFilePdf,
} from "react-icons/fa";
import Perfil from "../assets/Perfil.jpg";

const Formacion = () => {
  return (
    <section className="formacion" id="formacion">
      {/* Título */}
      <h2 className="titulo-formacion">Mi formación</h2>

      <h3 className="subtitulo-formacion">
        Educación y logros
        <span className="linea-azul"></span>
      </h3>

      <div className="bloque-formacion">
        {/* ================= EDUCACIÓN ================= */}
        <div className="bloque-header">
          <FaGraduationCap className="icono-educacion" />
          <h4>Educación</h4>
        </div>

        <div className="tarjeta-formacion">
          <div className="fecha">
            <FaCalendarAlt />
            <span>Presente · 2021</span>
          </div>

          <h5 className="carrera">
            Ingeniería en Sistemas Computacionales
          </h5>

          <p className="universidad">Universidad Tecnológica</p>

          <p className="semestre">7° semestre</p>

          <p className="descripcion-formacion">
            Formación enfocada en desarrollo de software, bases de datos,
            programación web y buenas prácticas de ingeniería.
          </p>
        </div>

        {/* ================= RECONOCIMIENTO ================= */}
        <div className="bloque-header reconocimiento">
          <FaLightbulb className="icono-reconocimiento" />
          <h4>Reconocimiento</h4>
        </div>

        <div className="tarjeta-formacion">
          <div className="evidencia">
            <a
              href="/docs/reconocimiento.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pdf"
            >
              <FaFilePdf />
              Ver diploma (PDF)
            </a>

            <div className="imagen-reconocimiento">
              <img src={Perfil} alt="Reconocimiento académico" />
              <p className="titulo-reconocimiento">
                Reconocimiento por buena calificación · 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
