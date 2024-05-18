import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import mapa from "../tmp/mapa.png";
import lista from "../tmp/lista_popraw.png";
import movie_list from "../tmp/movie.png";
import category from "../tmp/category.png";
function Services() {
  return (
    <div className="services">
      <div className="service_title"> Dostępne usługi</div>
      <div className="services_left">
        <div className="services_button">WYŚWIETLANIE MAPY UŻYTKOWNIKÓW</div>
        <img className="icon" src={mapa} alt="ikona1"></img>
        <div className="services_button2">WYŚWIETLANIE LISTY UŻYTKOWNIKÓW</div>
        <img className="icon2" src={lista} alt="ikona2"></img>
        <div className="services_button3">WYŚWIETLANIE LISTY FILMÓW</div>
        <img className="icon3" src={movie_list} alt="ikona3"></img>
        <div className="services_button4">WYŚWIETLANIE KATEGORII FILMOWYCH</div>
        <img className="icon4" src={category} alt="ikona4"></img>
      </div>
    </div>
  );
}

export default Services;
