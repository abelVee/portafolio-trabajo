import "./InformacionPersonal.css";
import { FaBolt, FaCheckCircle, FaLightbulb, FaUsers } from "react-icons/fa";


const InformacionPersonal = () => {
  return (
    <section className="info-personal" id="sobre-mi">
      {/* Título principal */}
      <h2 className="titulo-principal">Conóceme</h2>

      {/* Subtítulo */}
      <h3 className="subtitulo">
        Sobre mí
        <span className="linea"></span>
      </h3>

      {/* Descripción principal */}
      <h4 className="frase">Desarrollador apasionado por la tecnología</h4>

      <p className="descripcion">
        Soy estudiante de octavo semestre con interés en el desarrollo de
        aplicaciones modernas, enfocado en escribir código limpio,
        escalable y mantener un aprendizaje constante en nuevas tecnologías.
      </p>

      {/* Estadísticas */}
      <div className="estadisticas">
        <div className="card-estadistica">
          <span className="numero">1</span>
          <p>Años de servicio</p>
        </div>

        <div className="card-estadistica">
          <span className="numero">2+</span>
          <p>Proyectos</p>
        </div>

        <div className="card-estadistica">
          <span className="numero">3</span>
          <p>Reconocimientos</p>
        </div>
      </div>

      {/* Habilidades blandas */}
      <h3 className="subtitulo-secundario">Habilidades blandas</h3>
<div className="habilidades">
  <div className="card-habilidad">
    <FaBolt className="icono-habilidad" />
    <h4>Aprendizaje rápido</h4>
    <p>
      Capacidad para adaptarme rápidamente a nuevas tecnologías,
      herramientas y metodologías de trabajo.
    </p>
  </div>

  <div className="card-habilidad">
    <FaCheckCircle className="icono-habilidad" />
    <h4>Responsabilidad y compromiso</h4>
    <p>
      Cumplo con tareas y objetivos asignados, manteniendo una actitud
      profesional y enfocada en resultados.
    </p>
  </div>

  <div className="card-habilidad">
    <FaLightbulb className="icono-habilidad" />
    <h4>Resolución de problemas</h4>
    <p>
      Analizo situaciones y propongo soluciones efectivas ante
      retos técnicos o académicos.
    </p>
  </div>

  <div className="card-habilidad">
    <FaUsers className="icono-habilidad" />
    <h4>Trabajo en equipo</h4>
    <p>
      Me integro y colaboro de manera efectiva en equipos,
      fomentando la comunicación y el respeto.
    </p>
  </div>
</div>

    </section>
  );
};

export default InformacionPersonal;
