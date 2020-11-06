import React, { useState } from "react";
import Map from "../Map/index";

function IssTracker() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  async function getData() {
    const res = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`, {
      headers: { accept: "application/json" },
    });
    const data = await res.json();
    setLongitude(data.longitude);
    setLatitude(data.latitude);
  }

  getData();

  return (
    <div>
      <Map longitude={longitude} latitude={latitude} />
    </div>
  );
}

export default IssTracker;
