import "../styles/PanelMomento.css";

export function PanelMomento() {
  return (
    <div className="momentos-container">
      <div className="momento-card">
        <h2>Momento</h2>
        <a href="#modal-momento1" className="btn-cargar">
          Cargar Actividades
        </a>
      </div>
    </div>
  );
}