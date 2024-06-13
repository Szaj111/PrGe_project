import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import { Link } from "react-router-dom";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";

import axios from "axios";

function Map() {
  const [uzytkownicy, setuzytkownicy] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      console.log(feature.properties.nick);
      console.log("Nick:", feature.properties.nick);
      console.log("Miasto:", feature.properties.miasto);
      console.log("Oglądane filmy:", feature.properties.obej_filmy);
      console.log("Subskrypcja:", feature.properties.subkrypcja);
      layer.bindPopup(`
        <h1>Dane uzytkownikow: </h1>
        <strong>Nazwa:</strong> ${feature.properties.nick} </br>
        <strong>Miasto:</strong> ${feature.properties.miasto} </br>
        <strong>Oglądane filmy:</strong> ${feature.properties.obej_filmy} </br>
        <strong>Subskrypcja:</strong> ${feature.properties.subkrypcja}
      `);
    }
  };

  useEffect(() => {
    console.log("dane");
    const getData = () => {
      axios
        .get(
          // "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Au%C5%BCytkownicy_db_mv_1&maxFeatures=50&outputFormat=application%2Fjson"
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Au%C5%BCytkownicy_db_mv_4326&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane.data);
          setuzytkownicy(dane.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getData();
  }, []);

  return (
    <div className="page">
      <div className="left side">
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
            {/* <LayersControl.Overlay checked name="Uzytkownicy">
              {uzytkownicy ? (
                <GeoJSON data={uzytkownicy} onEachFeature={makePopup} />
              ) : (
                ""
              )}
            </LayersControl.Overlay> */}
            <LayersControl.Overlay checked name="Uzytkownicy">
              {uzytkownicy ? (
                <GeoJSON
                  data={uzytkownicy}
                  style={() => ({
                    color: "blue",
                    weight: 2,
                    fillColor: "green",
                    fillOpacity: 0.5,
                  })}
                  onEachFeature={makePopup}
                />
              ) : (
                ""
              )}
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>

      <div className="right_side">
        <div className="serach">
          <input
            className="nick_input"
            type="text"
            placeholder="Podaj nick użytkownika"
          />
          <input
            className="category_input"
            type="text"
            placeholder="Podaj kategorie obejrzanego filmu"
          />
          <input
            className="movie_input"
            type="text"
            placeholder="Podaj nazwe obejrzanego filmu"
          />
          <button className="serach_btn">wyszukaj</button>
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
        </div>
      </div>
    </div>
  );
}

export default Map;
