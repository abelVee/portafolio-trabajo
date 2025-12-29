import "./Formacion.css";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaLightbulb,
} from "react-icons/fa";

import hackatonImg from "../assets/Hackton.jpg";
import constanciaHImg from "../assets/ConstanciaHackton.jpg";
import constanciaSoconuscoImg from "../assets/ConstanciaSoconusco.jpg";
import constanciaConocimientoiImg from "../assets/ConstanciaConocimiento.jpg";
import maquinaExpendedoraImg from "../assets/MaquinaExpendora.jpg";
import soconuscoImag from "../assets/Soconusco.jpg";

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

          <h5 className="carrera">Ingeniería en Sistemas Computacionales</h5>

          <p className="universidad">Universidad Tecnológica</p>

          <p className="semestre">7° semestre</p>

          <p className="descripcion-formacion">
            Formación enfocada en desarrollo de software, bases de datos,
            programación web y buenas prácticas de ingeniería.
          </p>

          {/* NIVEL DE INGLÉS */}
          <p className="idioma">
            <strong>Inglés:</strong> Nivel Intermedio (B1) – Facultad de Lenguas, UNACH
          </p>
        </div>

        {/* ================= RECONOCIMIENTO ================= */}
        <div className="bloque-header reconocimiento">
          <FaLightbulb className="icono-reconocimiento" />
          <h4>Reconocimiento</h4>
        </div>

        <div className="tarjeta-formacion">
          <div className="evidencia">
            {/* Hackatón */}
            <div className="fila-reconocimientos">
              <div className="imagen-reconocimiento">
                <img src={hackatonImg} alt="Reconocimiento hackatón 2025" />
                <p className="titulo-reconocimiento">
                  Ganador del <strong>Primer Lugar</strong> en el Hackatón 2025 local.
                  <br />
                  Clasificación al Nacional en Guadalajara.
                </p>
              </div>

              <div className="imagen-reconocimiento">
                <img src={constanciaHImg} alt="Constancia Hackatón" />
                <p className="titulo-reconocimiento">
                  Constancia de participación en el Hackatón 2025.
                </p>
              </div>
            </div>

            {/* Soconusco */}
            <div className="fila-reconocimientos">
              <div className="imagen-reconocimiento">
                <img src={soconuscoImag} alt="Soconusco" />
                <p className="titulo-reconocimiento">
                  Participación en el <strong>Desafío Emprendedor 2025</strong>.
                </p>
              </div>

              <div className="imagen-reconocimiento">
                <img
                  src={constanciaSoconuscoImg}
                  alt="Constancia Soconusco"
                />
                <p className="titulo-reconocimiento">
                  Constancia de participación en Soconusco.
                </p>
              </div>
            </div>

            {/* Conocimiento */}
            <div className="fila-reconocimientos">
              <div className="imagen-reconocimiento">
                <img
                  src={maquinaExpendedoraImg}
                  alt="Maratón de Conocimiento"
                />
                <p className="titulo-reconocimiento">
                  Ganador junto a mi compañero del
                  <strong> Maratón de Conocimiento de Computación</strong>,
                  29 de agosto de 2024.
                </p>
              </div>

              <div className="imagen-reconocimiento">
                <img
                  src={constanciaConocimientoiImg}
                  alt="Máquina Expendedora"
                />
                <p className="titulo-reconocimiento">
                  Proyecto de Máquina Expendedora desarrollado durante la
                  formación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
