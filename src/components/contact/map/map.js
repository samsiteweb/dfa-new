import React from "react";
import "./map.css";

import MapImg from "../../../assets/img/map.png";

const Map = () => {
  return (
    <div className="mapContainer">
      <img src={MapImg} alt="map" className="mapImg" />
    </div>
  );
};

export default Map;
