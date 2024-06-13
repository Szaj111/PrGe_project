import React from "react";
import "./Subs_db.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import { Link } from "react-router-dom";

const usersData = [
  {
    id: 1,
    name: "Szym",
    subsrypcja: "Premium",
    miasto: "Wegorzewo",
    obejrzane_filmy: "SAW_II",
  },
  {
    id: 2,
    name: "Suchy",
    subsrypcja: "Basic",
    miasto: "Gizycko",
    obejrzane_filmy: "Killer",
  },
  {
    id: 3,
    name: "Stanley",
    subsrypcja: "Premium",
    miasto: "Gdynia",
    obejrzane_filmy: "Diuna, Shrek",
  },
];

function Subs_db() {
  return (
    <div>
      <div className="title">Baza subskrybentów</div>
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
                <th> Nick</th>
                <th> Subkrypcja</th>
                <th> Miasto</th>
                <th> obejrzane filmy</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((users) => (
                <tr key={users.id}>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.subsrypcja}</td>
                  <td>{users.miasto}</td>
                  <td>{users.obejrzane_filmy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Subs_db;
