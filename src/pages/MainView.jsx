import { Calendario } from "../components/Calendario";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../styles/MainView.css";

export function MainView() {
  return (
    <div className="page-container">
      <NavBar />

      <main className="mainViewContainer">
        <h1 className="main-title">2026</h1>
        <Calendario />
      </main>

      <Footer />
    </div>
  );
}