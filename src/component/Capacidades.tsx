import "./Capacidades.css";

const Capacidades = () => {
  return (
    <section className="capacidades" id="habilidades">
      <h2 className="titulo-capacidades">Mis capacidades</h2>

      <h3 className="subtitulo-capacidades">
        Habilidades técnicas
        <span className="linea-azul"></span>
      </h3>

      <div className="contenedor-tarjetas">
        {/* Frontend */}
        <div className="tarjeta">
          <h4>Frontend</h4>

          <div className="skill">
            <div className="skill-info">
              <span>HTML / CSS</span>
              <span className="porcentaje">85%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "85%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>JavaScript</span>
              <span className="porcentaje">60%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "60%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>React</span>
              <span className="porcentaje">30%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "30%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>Tailwind CSS</span>
              <span className="porcentaje">30%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "30%" }} />
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="tarjeta">
          <h4>Backend</h4>

          <div className="skill">
            <div className="skill-info">
              <span>Java</span>
              <span className="porcentaje">70%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "70%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>SQL</span>
              <span className="porcentaje">80%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "80%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>Python</span>
              <span className="porcentaje">20%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "20%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>Node.js</span>
              <span className="porcentaje">40%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "40%" }} />
            </div>
          </div>
        </div>

        {/* Herramientas */}
        <div className="tarjeta">
          <h4>Herramientas</h4>

          <div className="skill">
            <div className="skill-info">
              <span>Apache NetBeans</span>
              <span className="porcentaje">80%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "80%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>Git / GitHub</span>
              <span className="porcentaje">70%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "70%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>Figma</span>
              <span className="porcentaje">40%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "40%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>VS Code</span>
              <span className="porcentaje">90%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "90%" }} />
            </div>
          </div>
        </div>

        {/* Bases de datos */}
        <div className="tarjeta">
          <h4>Bases de datos</h4>

          <div className="skill">
            <div className="skill-info">
              <span>PostgreSQL</span>
              <span className="porcentaje">90%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "90%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>MySQL</span>
              <span className="porcentaje">50%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "50%" }} />
            </div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>MongoDB</span>
              <span className="porcentaje">30%</span>
            </div>
            <div className="barra">
              <div className="progreso" style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>

      <h3 className="subtitulo-secundario">Otras tecnologías y conceptos</h3>

      <div className="tags">
        <span>REST APIs</span>
        <span>Metodología Ágil</span>
        <span>Pruebas Unitarias</span>
        <span>Scrum</span>
        <span>POO</span>
        <span>MVC</span>
        <span>Linux</span>
      </div>
    </section>
  );
};

export default Capacidades;
