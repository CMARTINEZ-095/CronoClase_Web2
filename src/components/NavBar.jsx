//Estiben
import "../styles/NavBar.css";

import calendarioImg from "../assets/images/calendario.png";
import panelCargaImg from "../assets/images/acortar.png";
import vistaEstudiantesImg from "../assets/images/graduado.png";
import panelEvaluacionImg from "../assets/images/journal-code.svg";
import cerrarSesionImg from "../assets/images/lock-fill.svg";

export function NavBar() {
  return (
    <nav className="navCalendar">
      <div className="nav-buttons">
        <a href="#" className="nav-button active">
          <img src={calendarioImg} alt="Calendario" />
          Calendario
        </a>

        <a href="#" className="nav-button">
          <img src={panelCargaImg} alt="Panel de Carga" />
          Panel de Carga
        </a>

        <a href="#" className="nav-button">
          <img src={vistaEstudiantesImg} alt="Vista de Estudiantes" />
          Vista de Estudiantes
        </a>

        <a href="#" className="nav-button">
          <img src={panelEvaluacionImg} alt="Panel de Evaluación" />
          Panel de Evaluación
        </a>

        <a href="#" className="nav-button">
          <img src={cerrarSesionImg} alt="Cerrar sesión" />
          Cerrar sesión
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
