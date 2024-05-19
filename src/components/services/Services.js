import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import mapa from "../tmp/mapa.png";
import lista from "../tmp/lista_popraw.png";
import movie_list from "../tmp/movie.png";
import category from "../tmp/category.png";
import movie_top1 from "../tmp/img_left_top.png";
import movie_top2 from "../tmp/img_right_top.png";
import movie_bot1 from "../tmp/img_left_bottom.png";
import movie_bot2 from "../tmp/img_right_bottom.png";
function Services() {
  return (
    <div className="services">
      <div className="service_title"> Dostępne usługi</div>
      <div className="services_left">
        <Link to="/map">
          <button className="services_button">
            WYŚWIETLANIE MAPY UŻYTKOWNIKÓW
          </button>
        </Link>
        <Link to="/map">
          <img className="icon" src={mapa} alt="ikona1"></img>
        </Link>

        <button className="services_button2">
          WYŚWIETLANIE LISTY UŻYTKOWNIKÓW
        </button>
        <img className="icon2" src={lista} alt="ikona2"></img>
        <button className="services_button3">WYŚWIETLANIE LISTY FILMÓW</button>
        <img className="icon3" src={movie_list} alt="ikona3"></img>
        <button className="services_button4">
          WYŚWIETLANIE KATEGORII FILMOWYCH
        </button>
        <img className="icon4" src={category} alt="ikona4"></img>
      </div>
      <div className="services_right"></div>
      <img className="movie_top" src={movie_top1} alt="zdjecie1"></img>
      <img className="movie_top2" src={movie_top2} alt="zdjecie2"></img>
      <img className="movie_bot" src={movie_bot1} alt="zdjecie3"></img>
      <img className="movie_bot2" src={movie_bot2} alt="zdjecie4"></img>
    </div>
  );
}

export default Services;
