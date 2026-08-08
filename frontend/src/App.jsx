import { useState } from "react";
import MapView from "./components/MapView";

const regions = [
  "Tashkent",
  "Samarkand",
  "Bukhara",
  "Navoi",
  "Jizzakh",
  "Surkhandarya",
  "Kashkadarya",
  "Fergana",
  "Andijan",
  "Namangan",
  "Syrdarya",
  "Khorezm",
  "Karakalpakstan",
];

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [region, setRegion] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runAnalysis = async () => {
    if (!region) {
      setError("Please select a region first.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ region }),
      });

      if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
      }

      const data = await response.json();

      if (!data.analysis) {
        throw new Error("Analysis data is missing.");
      }

      setAnalysis(data.analysis);
    } catch (err) {
      setError(`Analysis Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!showAnalysis) {
    return (
      <main className="app">
        <section className="hero">
          <h1>GeoThermAI Explorer</h1>

          <p>AI-powered geothermal exploration platform</p>

          <button
            className="primary-button"
            onClick={() => setShowAnalysis(true)}
          >
            Start Analysis
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <section className="analysis-page">
        <header className="page-header">
          <div>
            <h1>GeoThermAI Explorer</h1>
            <h2>Geothermal Analysis Module</h2>
          </div>

          <button
            className="secondary-button"
            onClick={() => {
              setShowAnalysis(false);
              setAnalysis(null);
              setError("");
            }}
          >
            ← Back
          </button>
        </header>

        <p className="description">
          Select a region and start the geothermal resource analysis.
        </p>

        <div className="control-panel">
          <label htmlFor="region">Region</label>

          <select
            id="region"
            value={region}
            onChange={(event) => {
              setRegion(event.target.value);
              setAnalysis(null);
              setError("");
            }}
          >
            <option value="">Choose region</option>

            {regions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            className="primary-button"
            onClick={runAnalysis}
            disabled={loading}
          >
            {loading ? "Running Analysis..." : "Run Analysis"}
          </button>
        </div>

        {error && <div className="error-box">{error}</div>}

        <MapView selectedRegion={region} analysis={analysis} />

        {analysis && (
          <section className="result-panel">
            <h2>Geothermal Analysis Result</h2>

            <div className="result-grid">
              <div className="result-card">
                <span>Region</span>
                <strong>{region}</strong>
              </div>

              <div className="result-card">
                <span>Geothermal Probability</span>
                <strong>
                  {Math.round(
                    analysis.geothermal_probability * 100
                  )}
                  %
                </strong>
              </div>

              <div className="result-card">
                <span>Temperature Forecast</span>
                <strong>{analysis.temperature_forecast} °C</strong>
              </div>

              <div className="result-card">
                <span>Depth Forecast</span>
                <strong>{analysis.depth_forecast} m</strong>
              </div>

              <div className="result-card">
                <span>Risk Level</span>
                <strong>
                  {String(analysis.risk_level).toUpperCase()}
                </strong>
              </div>

              <div className="result-card">
                <span>Prospectivity Index</span>
                <strong>{analysis.prospectivity_index}</strong>
              </div>
            </div>

            <div className="success-message">
              ✓ Analysis completed
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
