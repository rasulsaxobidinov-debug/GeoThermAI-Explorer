import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Circle,
  LayersControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const { BaseLayer, Overlay } = LayersControl;

const uzbekistanCenter = [41.3775, 64.5853];

// Demo geothermal prospectivity points.
// These are MVP demonstration points, not measured exploration targets.
const geothermalPoints = [
  {
    name: "Tashkent Geothermal Zone",
    region: "Tashkent",
    position: [41.31, 69.28],
    temperature: 92,
    depth: 1850,
    probability: 78,
  },
  {
    name: "Samarkand Geothermal Zone",
    region: "Samarkand",
    position: [39.65, 66.96],
    temperature: 86,
    depth: 2100,
    probability: 72,
  },
  {
    name: "Bukhara Geothermal Zone",
    region: "Bukhara",
    position: [39.77, 64.43],
    temperature: 101,
    depth: 2400,
    probability: 81,
  },
  {
    name: "Navoi Geothermal Zone",
    region: "Navoi",
    position: [40.10, 65.37],
    temperature: 96,
    depth: 2250,
    probability: 76,
  },
  {
    name: "Jizzakh Geothermal Zone",
    region: "Jizzakh",
    position: [40.12, 67.84],
    temperature: 89,
    depth: 1950,
    probability: 74,
  },
  {
    name: "Surkhandarya Geothermal Zone",
    region: "Surkhandarya",
    position: [38.50, 67.75],
    temperature: 108,
    depth: 2600,
    probability: 85,
  },
  {
    name: "Kashkadarya Geothermal Zone",
    region: "Kashkadarya",
    position: [38.86, 65.80],
    temperature: 104,
    depth: 2450,
    probability: 83,
  },
  {
    name: "Fergana Geothermal Zone",
    region: "Fergana",
    position: [40.39, 71.78],
    temperature: 91,
    depth: 1800,
    probability: 79,
  },
];

// Demonstration thermal anomalies.
const thermalAnomalies = [
  [41.31, 69.28],
  [39.65, 66.96],
  [39.77, 64.43],
  [38.50, 67.75],
  [38.86, 65.80],
  [40.39, 71.78],
];

// Demonstration geological fault traces.
const faultLines = [
  [
    [42.0, 68.0],
    [41.2, 69.0],
    [40.4, 69.8],
    [39.5, 70.5],
    [38.5, 71.0],
  ],
  [
    [41.0, 64.0],
    [40.2, 65.0],
    [39.4, 66.0],
    [38.5, 67.0],
  ],
  [
    [42.2, 70.5],
    [41.5, 71.0],
    [40.7, 71.5],
    [39.8, 72.0],
  ],
];

function createProspectMarker() {
  return L.divIcon({
    className: "geothermal-marker",
    html: `
      <div class="geothermal-marker-inner">
        <span>△</span>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function MapView({ selectedRegion, analysis }) {
  const selectedPoint = geothermalPoints.find(
    (point) => point.region === selectedRegion
  );

  return (
    <div className="map-wrapper">
      <MapContainer
        center={uzbekistanCenter}
        zoom={5.5}
        scrollWheelZoom={true}
        className="geo-map"
      >
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>

          <Overlay checked name="Geothermal Prospects">
            <>
              {geothermalPoints.map((point) => (
                <Marker
                  key={point.name}
                  position={point.position}
                  icon={createProspectMarker()}
                >
                  <Popup>
                    <strong>{point.name}</strong>
                    <br />
                    Region: {point.region}
                    <br />
                    Temperature: {point.temperature} °C
                    <br />
                    Depth: {point.depth} m
                    <br />
                    Probability: {point.probability}%
                  </Popup>
                </Marker>
              ))}
            </>
          </Overlay>

          <Overlay checked name="Thermal Anomalies">
            <>
              {thermalAnomalies.map((position, index) => (
                <Circle
                  key={index}
                  center={position}
                  radius={35000}
                  pathOptions={{
                    color: "#e67e22",
                    fillColor: "#f39c12",
                    fillOpacity: 0.22,
                    weight: 2,
                  }}
                />
              ))}
            </>
          </Overlay>

          <Overlay checked name="Geological Faults">
            <>
              {faultLines.map((line, index) => (
                <Polyline
                  key={index}
                  positions={line}
                  pathOptions={{
                    color: "#c0392b",
                    weight: 3,
                    opacity: 0.8,
                  }}
                />
              ))}
            </>
          </Overlay>
        </LayersControl>

        {selectedPoint && analysis && (
          <Marker
            position={selectedPoint.position}
            icon={createProspectMarker()}
          >
            <Popup>
              <strong>AI Analysis Result</strong>
              <br />
              Region: {selectedRegion}
              <br />
              Geothermal Probability:{" "}
              {Math.round(
                (analysis.geothermal_probability ?? 0) * 100
              )}
              %
              <br />
              Temperature: {analysis.temperature_forecast} °C
              <br />
              Depth: {analysis.depth_forecast} m
              <br />
              Risk: {String(analysis.risk_level).toUpperCase()}
              <br />
              Prospectivity Index: {analysis.prospectivity_index}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <div className="map-legend">
        <div className="legend-title">GeoThermAI Explorer</div>

        <div className="legend-item">
          <span className="legend-marker">△</span>
          Geothermal prospect
        </div>

        <div className="legend-item">
          <span className="legend-anomaly"></span>
          Thermal anomaly
        </div>

        <div className="legend-item">
          <span className="legend-fault"></span>
          Geological fault
        </div>
      </div>
    </div>
  );
}

export default MapView;
