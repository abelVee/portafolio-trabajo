import { useState } from "react";
import "./Encabezado.css";

const Encabezado = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="encabezado">
      {/* Logo */}
      <div className="logo">PortaFolio.</div>

      {/* Navegación desktop */}
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#formacion">Formacion</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* Botón hamburguesa */}
      <div
        className="menu-icon"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </div>

      {/* Menú móvil */}
      <nav className={`nav-mobile ${menuAbierto ? "activo" : ""}`}>
        <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
        <a href="#sobre-mi" onClick={() => setMenuAbierto(false)}>Sobre mí</a>
        <a href="#habilidades" onClick={() => setMenuAbierto(false)}>Habilidades</a>
        <a href="#proyectos" onClick={() => setMenuAbierto(false)}>Proyectos</a>
        <a href="#formacion" onClick={() => setMenuAbierto(false)}>Formacion</a>
        <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
      </nav>
    </header>
  );
};

export default Encabezado;
