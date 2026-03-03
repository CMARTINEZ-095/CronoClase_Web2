import "../styles/PanelCargaActividades.css";
import { PanelMomento } from "../components/PanelMomento";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";

export function PanelCargaActividades() {
  return (
    <div className="page-container">
      <NavBar />

      
      <main className="panel-container">
        <h1 className="panel-title">
          Panel de Carga de Actividades
        </h1>

        <div className="momentos-wrapper">
          <PanelMomento />
          <PanelMomento />
          <PanelMomento />
        </div>
      </main>

      <Footer />
    </div>
  );
}