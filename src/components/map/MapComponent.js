import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapComponent = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      map.setView([coordinates[1], coordinates[0]], 12);
    }
  }, [coordinates, map]);

  return null;
};

export default MapComponent;
