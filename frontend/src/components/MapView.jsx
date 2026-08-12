import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Circle,
  LayersControl,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const { Overlay } = LayersControl;

const uzbekistanCenter = [41.3775, 64.5853];

const geothermalPoints = [
  {
    name: "Tashkent Geothermal Zone",
    region: "Tashkent",
    position: [41.31, 69.28],
    temperature: 92,
    depth: 1850,
    probability: 78,
    prospectivity: 0.81,
  },
  {
    name: "Samarkand Geothermal Zone",
    region: "Samarkand",
    position: [39.65, 66.96],
    temperature: 86,
    depth: 2100,
    probability: 72,
    prospectivity: 0.74,
  },
  {
    name: "Bukhara Geothermal Zone",
    region: "Bukhara",
    position: [39.77, 64.43],
    temperature: 101,
    depth: 2400,
    probability: 81,
    prospectivity: 0.84,
  },
  {
    name: "Navoi Geothermal Zone",
    region: "Navoi",
    position: [40.10, 65.37],
    temperature: 96,
    depth: 2250,
    probability: 76,
    prospectivity: 0.78,
  },
  {
    name: "Jizzakh Geothermal Zone",
    region: "Jizzakh",
    position: [40.12, 67.84],
    temperature: 89,
    depth: 1950,
    probability: 74,
    prospectivity: 0.76,
  },
  {
    name: "Surkhandarya Geothermal Zone",
    region: "Surkhandarya",
    position: [38.50, 67.75],
    temperature: 108,
    depth: 2600,
    probability: 85,
    prospectivity: 0.88,
  },
  {
    name: "Kashkadarya Geothermal Zone",
    region: "Kashkadarya",
    position: [38.86, 65.80],
    temperature: 104,
    depth: 2450,
    probability: 83,
    prospectivity: 0.86,
  },
  {
    name: "Fergana Geothermal Zone",
    region: "Fergana",
    position: [40.39, 71.78],
    temperature: 91,
    depth: 1800,
    probability: 79,
    prospectivity: 0.82,
  },
  {
    name: "Andijan Regional Demo Point",
    region: "Andijan",
    position: [40.78, 72.34],
    temperature: 88,
    depth: 1900,
    probability: 75,
    prospectivity: 0.77,
  },
  {
    name: "Namangan Regional Demo Point",
    region: "Namangan",
    position: [41.00, 71.67],
    temperature: 90,
    depth: 1950,
    probability: 77,
    prospectivity: 0.79,
  },
  {
    name: "Syrdarya Regional Demo Point",
    region: "Syrdarya",
    position: [40.49, 68.78],
    temperature: 82,
    depth: 2200,
    probability: 68,
    prospectivity: 0.69,
  },
  {
    name: "Khorezm Regional Demo Point",
    region: "Khorezm",
    position: [41.55, 60.63],
    temperature: 78,
    depth: 2300,
    probability: 64,
    prospectivity: 0.63,
  },
  {
    name: "Karakalpakstan Regional Demo Point",
    region: "Karakalpakstan",
    position: [42.46, 59.62],
    temperature: 76,
    depth: 2500,
    probability: 61,
    prospectivity: 0.60,
  },
];

const thermalAnomalies = [
  [41.31, 69.28],
  [39.65, 66.96],
  [39.77, 64.43],
  [38.50, 67.75],
  [38.86, 65.80],
  [40.39, 71.78],
];

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

function getProspectivityClass(value) {
  if (value >= 0.8) return "high";
  if (value >= 0.65) return "moderate";
  return "low";
}

function createProspectMarker(selected = false, prospectivity = 0) {
  const level =
    prospectivity >= 0.8
      ? "high"
      : prospectivity >= 0.65
      ? "moderate"
      : "low";

  return L.divIcon({
    className: "geothermal-marker",
    html: `
      <div class="geothermal-marker-inner ${level} ${
        selected ? "selected-marker" : ""
      }">
        <span>△</span>
      </div>
    `,
    iconSize: selected ? [44, 44] : [36, 36],
    iconAnchor: selected ? [22, 22] : [18, 18],
  });
}

function MapFocus({ selectedPoint }) {
  const map = useMap();

  useEffect(() => {
    if (selectedPoint) {
      map.flyTo(selectedPoint.position, 8, {
        duration: 1.2,
      });
    } else {
      map.flyTo(uzbekistanCenter, 6, {
        duration: 1.2,
      });
    }
  }, [map, selectedPoint]);

  return null;
}


const mapTranslations = {
  en: {
    prospects: "Geothermal Prospects", anomalies: "Thermal Anomalies", faults: "Geological Faults", aiResult: "AI Analysis Result",
    region: "Region", temperature: "Temperature", depth: "Depth", probability: "Probability", prospectivity: "Prospectivity",
    aiResultShort: "AI analysis result", updatedProbability: "Updated probability", intelligence: "GEOTHERMAL INTELLIGENCE",
    mapTitle: "Uzbekistan geothermal prospectivity", layers: "MAP LAYERS", indicators: "Spatial exploration indicators",
    geothermalProspect: "Geothermal prospect", thermalAnomaly: "Thermal anomaly", geologicalFault: "Geological fault",
    aiProspectivity: "AI Prospectivity", score: "Score", dataStatus: "Data status:", demo: "MVP demonstration dataset", high: "HIGH", moderate: "MODERATE", low: "LOW",
  },
  ru: {
    prospects: "Геотермальные перспективы", anomalies: "Термические аномалии", faults: "Геологические разломы", aiResult: "Результат AI-анализа",
    region: "Регион", temperature: "Температура", depth: "Глубина", probability: "Вероятность", prospectivity: "Перспективность",
    aiResultShort: "Результат AI-анализа", updatedProbability: "Обновлённая вероятность", intelligence: "ГЕОТЕРМАЛЬНАЯ АНАЛИТИКА",
    mapTitle: "Геотермальная перспективность Узбекистана", layers: "СЛОИ КАРТЫ", indicators: "Пространственные показатели разведки",
    geothermalProspect: "Геотермальная перспектива", thermalAnomaly: "Термическая аномалия", geologicalFault: "Геологический разлом",
    aiProspectivity: "AI-перспективность", score: "Балльная оценка", dataStatus: "Статус данных:", demo: "демонстрационный набор MVP", high: "ВЫСОКАЯ", moderate: "СРЕДНЯЯ", low: "НИЗКАЯ",
  },
  uz: {
    prospects: "Geotermal istiqbollar", anomalies: "Termik anomaliyalar", faults: "Geologik yoriqlar", aiResult: "AI tahlil natijasi",
    region: "Hudud", temperature: "Harorat", depth: "Chuqurlik", probability: "Ehtimollik", prospectivity: "Istiqbollilik",
    aiResultShort: "AI tahlil natijasi", updatedProbability: "Yangilangan ehtimollik", intelligence: "GEOTERMAL ANALITIKA",
    mapTitle: "O‘zbekiston geotermal istiqbolliligi", layers: "XARITA QATLAMLARI", indicators: "Fazoviy qidiruv ko‘rsatkichlari",
    geothermalProspect: "Geotermal istiqbol", thermalAnomaly: "Termik anomaliya", geologicalFault: "Geologik yoriq",
    aiProspectivity: "AI istiqbolliligi", score: "Ball", dataStatus: "Maʼlumotlar holati:", demo: "MVP demo maʼlumotlar to‘plami", high: "YUQORI", moderate: "O‘RTACHA", low: "PAST",
  },
};
function MapView({ selectedRegion, analysis, language = "en" }) {
  const mt = mapTranslations[language] || mapTranslations.en;

  const selectedPoint = geothermalPoints.find(
    (point) => point.region === selectedRegion
  );

  const selectedProspectivity =
    analysis?.prospectivity_index ??
    selectedPoint?.prospectivity ??
    null;

  const prospectivityClass =
    selectedProspectivity !== null
      ? getProspectivityClass(selectedProspectivity)
      : null;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={uzbekistanCenter}
        zoom={6}
        minZoom={5}
        maxZoom={12}
        scrollWheelZoom={true}
        className="geothermal-map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapFocus selectedPoint={selectedPoint} />

        <LayersControl position="topright">
          <Overlay checked name={mt.prospects}>
            <>
              {geothermalPoints.map((point) => {
                const isSelected =
                  point.region === selectedRegion;

                return (
                  <Marker
                    key={point.name}
                    position={point.position}
                    icon={createProspectMarker(
                  isSelected,
                  analysis?.prospectivity_index ?? point.prospectivity
                )}
                  >
                    <Popup>
                      <div className="map-popup">
                        <h3>{point.name}</h3>

                        <p>
                          <strong>{mt.region}:</strong>{" "}
                          {point.region}
                        </p>

                        <p>
                          <strong>{mt.temperature}:</strong>{" "}
                          {point.temperature} °C
                        </p>

                        <p>
                          <strong>{mt.depth}:</strong>{" "}
                          {point.depth} m
                        </p>

                        <p>
                          <strong>{mt.probability}:</strong>{" "}
                          {point.probability}%
                        </p>

                        <p>
                          <strong>{mt.prospectivity}:</strong>{" "}
                          {point.prospectivity.toFixed(2)}
                        </p>

                        {isSelected && analysis && (
                          <div className="popup-ai-result">
                            <strong>
                              ✓ {mt.aiResultShort}
                            </strong>
                            <br />
                            {mt.updatedProbability}:{" "}
                            {Math.round(
                              analysis.geothermal_probability * 100
                            )}
                            %
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </>
          </Overlay>

          <Overlay checked name={mt.anomalies}>
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

          <Overlay checked name={mt.faults}>
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

          {selectedPoint && analysis && (
            <Overlay checked name={mt.aiResult}>
              <Circle
                center={selectedPoint.position}
                radius={60000}
                pathOptions={{
                  color:
                    prospectivityClass === "high"
                      ? "#168a4a"
                      : prospectivityClass === "moderate"
                      ? "#d4af37"
                      : "#c0392b",
                  fillOpacity: 0.08,
                  weight: 4,
                  dashArray: "8 8",
                }}
              />
            </Overlay>
          )}
        </LayersControl>
      </MapContainer>

      <div className="map-overlay map-title-overlay">
        <span className="map-overlay-kicker">
          {mt.intelligence}
        </span>

        <strong>GeoThermAI Explorer</strong>

        <span>
          {mt.mapTitle}
        </span>
      </div>

      <div className="map-legend">
        <div className="legend-title">
          {mt.layers}
        </div>

        <div className="legend-subtitle">
          {mt.indicators}
        </div>

        <div className="legend-item">
          <span className="legend-marker">△</span>
          {mt.geothermalProspect}
        </div>

        <div className="legend-item">
          <span className="legend-anomaly" />
          {mt.thermalAnomaly}
        </div>

        <div className="legend-item">
          <span className="legend-fault" />
          {mt.geologicalFault}
        </div>

        {analysis && (
          <>
            <div className="legend-divider" />

            <div className="legend-title">
              {mt.aiProspectivity}
            </div>

            <div
              className={`prospectivity-badge ${prospectivityClass}`}
            >
              {prospectivityClass === "high"
                ? mt.high
                : prospectivityClass === "moderate"
                ? mt.moderate
                : mt.low}
            </div>

            <div className="legend-score">
              {mt.score}:{" "}
              <strong>
                {Number(selectedProspectivity).toFixed(2)}
              </strong>
            </div>
          </>
        )}

        <div className="legend-divider" />

        <div className="legend-disclaimer">
          <strong>{mt.dataStatus}</strong> {mt.demo}
        </div>
      </div>
    </div>
  );
}

export default MapView;
