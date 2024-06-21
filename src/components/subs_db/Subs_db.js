import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Subs_db.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import { Link } from "react-router-dom";

function Subs_db() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Au%C5%BCytkownicy_db_mv_4326&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          const features = response.data.features.map((feature, index) => ({
            id: index + 1,
            nick: feature.properties.nick,
            subsrypcja: feature.properties.subkrypcja,
            miasto: feature.properties.miasto,
            obejrzane_filmy: feature.properties.obej_filmy,
          }));
          setUsersData(features);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    getData();
  }, []);

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
                <th>Id</th>
                <th>Nick</th>
                <th>Subkrypcja</th>
                <th>Miasto</th>
                <th>Obejrzane filmy</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nick}</td>
                  <td>{user.subsrypcja}</td>
                  <td>{user.miasto}</td>
                  <td>{user.obejrzane_filmy}</td>
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
