import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import { Link } from "react-router-dom";
import user_icon from "../tmp/user_icon.webp";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import axios from "axios";
import { userIcon } from "./Icon";
import MapComponent from "./MapComponent.js";

function Map() {
  const [uzytkownicy, setuzytkownicy] = useState(null);
  const [filteredUzytkownicy, setFilteredUzytkownicy] = useState(null);
  const [searchNick, setSearchNick] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchFilm, setSearchFilm] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
        <h1>Dane użytkownika: </h1>
        <strong>Nazwa:</strong> ${feature.properties.nick} </br>
        <strong>Miasto:</strong> ${feature.properties.miasto} </br>
        <strong>Oglądane filmy:</strong> ${feature.properties.obej_filmy} </br>
        <strong>Subskrypcja:</strong> ${feature.properties.subkrypcja} </br>
        <strong>Obejrzane kategorie: </strong> ${feature.properties.obej_kategorie} </br>
        <img src=${user_icon} width="48" height="32" />
      `);
      layer.setIcon(userIcon);
    }
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Au%C5%BCytkownicy_db_mv_4326&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          setuzytkownicy(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getData();
  }, []);

  const handleSearch = () => {
    if (
      searchNick.trim() === "" &&
      searchCategory.trim() === "" &&
      searchFilm.trim() === ""
    ) {
      setFilteredUzytkownicy(null);
      return;
    }

    let filtered = uzytkownicy;

    if (searchNick.trim() !== "") {
      filtered = {
        ...filtered,
        features: filtered.features.filter((feature) =>
          feature.properties.nick
            .toLowerCase()
            .includes(searchNick.toLowerCase())
        ),
      };
    }

    if (searchCategory.trim() !== "") {
      filtered = {
        ...filtered,
        features: filtered.features.filter((feature) =>
          feature.properties.obej_kategorie
            .toLowerCase()
            .includes(searchCategory.toLowerCase())
        ),
      };
    }

    if (searchFilm.trim() !== "") {
      filtered = {
        ...filtered,
        features: filtered.features.filter((feature) =>
          feature.properties.obej_filmy
            .toLowerCase()
            .includes(searchFilm.toLowerCase())
        ),
      };
    }

    setFilteredUzytkownicy(filtered);
    if (filtered.features.length > 0) {
      const coordinates = filtered.features[0].geometry.coordinates;
      setCoordinates(coordinates);
    }
  };

  return (
    <div className="page">
      <div className="left_side">
        <div className="map_title">Netpchor Map</div>
        <div className="map_border"></div>
        <MapContainer center={[52.2322222, 21.0]} zoom={6}>
          <LayersControl>
            <LayersControl.BaseLayer checked name="OSM">
              <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="GoogleSatelite">
              <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenTopoMap">
              <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Użytkownicy">
              <WMSTileLayer
                layers=""
                url="http://127.0.0.1:8080/geoserver/prge/wms"
              />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay checked name="Użytkownicy">
              {(filteredUzytkownicy || uzytkownicy) && (
                <GeoJSON
                  data={filteredUzytkownicy || uzytkownicy}
                  style={() => ({
                    color: "blue",
                    weight: 2,
                    fillColor: "green",
                    fillOpacity: 0.5,
                  })}
                  onEachFeature={makePopup}
                />
              )}
            </LayersControl.Overlay>
          </LayersControl>
          {coordinates && <MapComponent coordinates={coordinates} />}
        </MapContainer>
      </div>

      <div className="right_side">
        <div className="search">
          <input
            className="nick_input"
            type="text"
            placeholder="Podaj nick użytkownika"
            value={searchNick}
            onChange={(e) => setSearchNick(e.target.value)}
          />
          <input
            className="category_input"
            type="text"
            placeholder="Podaj kategorie obejrzanego filmu"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
          <input
            className="movie_input"
            type="text"
            placeholder="Podaj nazwę obejrzanego filmu"
            value={searchFilm}
            onChange={(e) => setSearchFilm(e.target.value)}
          />
          <button className="search_btn" onClick={handleSearch}>
            Wyszukaj
          </button>
          <div className="web_side_ch">
            <div className="icons_bgn"></div>
            <Link to="/movies">
              <img className="icon_cat" src={category} alt="ikona_1" />
            </Link>
            <Link to="/map">
              <img className="icon_map" src={map} alt="ikona_2" />
            </Link>
            <Link to="/subs_db">
              <img className="icon_subs" src={db} alt="ikona3" />
            </Link>
            <Link to="/services">
              <img className="icon_services" src={services} alt="ikona4" />
            </Link>
            <Link to="/movies_list">
              <img className="icon_movies" src={movies} alt="ikona5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
