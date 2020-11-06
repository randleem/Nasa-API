import React, { useEffect } from "react";
import IssTracker from "../IssTracker/index.js";

function Map({ longitude, latitude }) {
  useEffect(
    function initMap() {
      const ISS = { lat: latitude, lng: longitude };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: ISS,
      });
      const marker = new google.maps.Marker({
        position: ISS,
        map: map,
      });
    },
    [longitude]
  );
  return <div id="map"></div>;
}

export default Map;
