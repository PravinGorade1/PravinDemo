import React from "react";
import "./Map.css";
import Dashboard from "./Dashboard";

function Map() {
  return (
    <div className="dashboard-map-container">

      <iframe
        className="dashboard-map-frame"
        src="https://www.google.com/maps?q=tembhurni,solapur,Maharashtra&z=15&output=embed"
        title="Nillod Location"
        loading="lazy"
      ></iframe>
      <Dashboard />
    </div>
  );
}

export default Map;
