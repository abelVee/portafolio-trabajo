import "./Capacidades.css";

type Skill = [string, number];

const Capacidades: React.FC = () => {
  const frontend: Skill[] = [
    ["HTML / CSS", 80],
    ["JavaScript", 45],
    ["React", 65],
    ["Next.js", 35],
  ];

  const backend: Skill[] = [
    ["Java", 55],
    ["Spring Boot", 55],
    ["Node.js", 35],
    ["Python", 30],
    ["C", 55],
  ];

  const basesDatos: Skill[] = [
    ["PostgreSQL", 75],
    ["MySQL", 55],
  ];

  const mobile: Skill[] = [
    ["React Native", 40],
    ["Swift", 65],
    ["SwiftUI", 65],
    ["Swift Playground", 60],
  ];

  const renderSkills = (skills: Skill[]) =>
    skills.map(([skill, percent]) => (
      <div className="skill" key={skill}>
        <div className="skill-info">
          <span>{skill}</span>
          <span className="porcentaje">{percent}%</span>
        </div>
        <div className="barra">
          <div
            className="progreso"
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    ));

  return (
    <section className="capacidades" id="habilidades">
      <h2 className="titulo-capacidades">Mis capacidades</h2>

      <h3 className="subtitulo-capacidades">
        Habilidades técnicas
        <span className="linea-azul"></span>
      </h3>

      <div className="contenedor-tarjetas">
        <div className="tarjeta">
          <h4>Frontend</h4>
          {renderSkills(frontend)}
        </div>

        <div className="tarjeta">
          <h4>Backend</h4>
          {renderSkills(backend)}
        </div>

        <div className="tarjeta">
          <h4>Bases de datos</h4>
          {renderSkills(basesDatos)}
        </div>

        <div className="tarjeta">
          <h4>Mobile / iOS</h4>
          {renderSkills(mobile)}
        </div>
      </div>

      <h3 className="subtitulo-secundario">
        Otras tecnologías y conceptos
      </h3>

      <div className="tags">
        {/* Tecnologías */}
        <span>Git / GitHub</span>
        <span>REST APIs</span>
        <span>Postman</span>
        <span>Linux</span>

        {/* Metodologías */}
        <span>Scrum</span>
        <span>Metodologías Ágiles</span>

        {/* Conceptos */}
        <span>POO</span>
        <span>MVC</span>
        <span>Pruebas Unitarias</span>
        <span>Singleton</span>

        {/* Herramientas */}
        <span>VS Code</span>
        <span>Xcode</span>
        <span>Figma</span>
        <span>Jira</span>
        <span>ClickUp</span>
        <span>Apache NetBeans</span>
        <span>Dia Diagram</span>
      </div>
    </section>
  );
};

export default Capacidades;
