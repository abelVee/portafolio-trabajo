import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef<HTMLFormElement | null>(null);
  const [estado, setEstado] = useState<"ok" | "error" | "">("");

  const enviarCorreo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_avhj2m9",
        "template_n9b7pl1",
        form.current,
        "VaLA6WavbvVck4YJ3"
      )
      .then(
        () => {
          setEstado("ok");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setEstado("error");
        }
      );
  };

  return (
    <section className="contacto" id="contacto">
      <h2 className="titulo-contacto">Hablemos</h2>

      <h3 className="subtitulo-contacto">
        Contáctame
        <span className="linea-azul"></span>
      </h3>

      <p className="pregunta">¿Tienes un proyecto en mente?</p>

      <p className="descripcion-contacto">
        Estoy disponible para oportunidades de trabajo, prácticas profesionales
        o colaboraciones en proyectos interesantes. ¡No dudes en contactarme!
      </p>

      <div className="tarjetas-contacto">
        <div className="tarjeta-contacto">
          <div className="icono-box"><FaEnvelope /></div>
          <div className="info-contacto">
            <span className="titulo-info">Email</span>
            <span className="dato">camerasabel56@gmail.com</span>
          </div>
        </div>

        <div className="tarjeta-contacto">
          <div className="icono-box"><FaPhoneAlt /></div>
          <div className="info-contacto">
            <span className="titulo-info">Teléfono</span>
            <span className="dato">+52 962 511 4933</span>
          </div>
        </div>

        <div className="tarjeta-contacto">
          <div className="icono-box"><FaMapMarkerAlt /></div>
          <div className="info-contacto">
            <span className="titulo-info">Ubicación</span>
            <span className="dato">Chiapas, México</span>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={enviarCorreo} className="formulario-contacto">
        <div className="campo">
          <label>Nombre</label>
          <input name="user_name" required />
        </div>

        <div className="campo">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>

        <div className="campo">
          <label>Asunto</label>
          <input name="subject" className="input-full" required />
        </div>

        <div className="campo">
          <label>Mensaje</label>
          <textarea name="message" rows={6} required />
        </div>

        <button type="submit">Enviar mensaje</button>

        {estado === "ok" && (
          <p style={{ color: "#22c55e", marginTop: 10 }}>
            ✔ Mensaje enviado correctamente
          </p>
        )}

        {estado === "error" && (
          <p style={{ color: "#ef4444", marginTop: 10 }}>
            ✖ Error al enviar el mensaje
          </p>
        )}
      </form>

      <footer className="footer">
        <div className="footer-izq">
          Creado por <strong>abelVee</strong>{" "}
          <FaHeart className="corazon" /> {new Date().getFullYear()}
        </div>

        <div className="footer-centro">
          <a href="https://github.com/abelVee" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abel-cameras-76b415344/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/abel_vee/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="mailto:camerasabel56@gmail.com"><FaEnvelope /></a>
        </div>

        <div className="footer-der">Todos los derechos reservados</div>
      </footer>
    </section>
  );
};

export default Contacto;
