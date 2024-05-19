import React from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import { Link } from "react-router-dom";
function Map() {
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
            <Link to="movie_category">
              <img className="icon_cat" src={category} alt="ikona_1"></img>
            </Link>
            <Link to="/map">
              <img className="icon_map" src={map} alt="ikona_2"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
