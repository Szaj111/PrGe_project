import React from "react";
import "./Movies_list.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import { Link } from "react-router-dom";

const moviesData = [
  {
    id: 1,
    name: "Film 1",
    category: "Horror",
    reżyser: "rezyser",
    time: "2h:30min",
  },
  {
    id: 2,
    name: "Film 2",
    category: "Sci-Fi",
    reżyser: "rezyser",
    time: "2h:30min",
  },
  {
    id: 3,
    name: "Film 3",
    category: "Action",
    reżyser: "rezyser",
    time: "2h:30min",
  },
];

function Movies_list() {
  return (
    <div>
      <div className="title">Baza filmów</div>
      <div className="movies_top_options">
        <div className="web_side_ch">
          <div className="icons_bgn"></div>
          <Link to="/movies">
            <img className="icon_cat" src={category} alt="ikona_1"></img>
          </Link>
          <Link to="/map">
            <img className="icon_map" src={map} alt="ikona_2"></img>
          </Link>
          <Link to="/subs_db">
            <img className="icon_subs" src={db} alt="ikona3"></img>
          </Link>
          <Link to="/services">
            <img className="icon_services" src={services} alt="ikona4"></img>
          </Link>
          <Link to="/movies_list">
            <img className="icon_movies" src={movies} alt="ikona5"></img>
          </Link>
        </div>
        <div className="data_tabs">
          <table>
            <thead>
              <tr>
                <th> Id</th>
                <th> Nazwa filmu</th>
                <th> Kategoria filmu</th>
                <th> Reżyser filmu</th>
                <th> Czas trwania filmu</th>
              </tr>
            </thead>
            <tbody>
              {moviesData.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.category}</td>
                  <td>{movie.reżyser}</td>
                  <td>{movie.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Movies_list;
