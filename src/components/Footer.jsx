import '../styles/Footer.css'
import React from "react";
import clockLogo from "../assets/clock.png"; 

export function Footer() {
  return (
    <footer className="footer-container">
      <h3 className="titleCronoFooter">
        Cron
        <img 
          className="userCronoFooter" 
          src={clockLogo} 
          alt="Reloj" 
        />
        Clase
      </h3>
    </footer>
  );
}