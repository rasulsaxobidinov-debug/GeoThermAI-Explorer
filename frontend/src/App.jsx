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

  const resetAnalysis = () => {
    setRegion("");
    setAnalysis(null);
    setError("");
  };

  if (!showAnalysis) {
    return (
      <main className="landing-page">
        <section className="hero-card">
          <div className="hero-badge">AI • GEOTHERMAL EXPLORATION</div>

          <h1>GeoThermAI Explorer</h1>

          <p>
            AI-powered geothermal exploration platform
          </p>

          <p className="hero-description">
            Intelligent analysis of geothermal potential using
            geological, geophysical and thermal information.
          </p>

          <button
            className="primary-button hero-button"
            onClick={() => setShowAnalysis(true)}
          >
            Start Analysis
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="analysis-page">
      <header className="top-header">
        <div>
          <div className="brand-title">GeoThermAI Explorer</div>
          <div className="brand-subtitle">
            AI-powered geothermal exploration
          </div>
        </div>

        <button
          className="secondary-button"
          onClick={() => {
            setShowAnalysis(false);
            resetAnalysis();
          }}
        >
          ← Back
        </button>
      </header>

      <section className="analysis-header">
        <div>
          <div className="section-label">ANALYSIS MODULE</div>
          <h1>Geothermal Resource Assessment</h1>
          <p>
            Select a region and run an AI-powered geothermal
            prospectivity analysis.
          </p>
        </div>
      </section>

      <section className="control-panel">
        <div className="control-field">
          <label htmlFor="region">Study Region</label>

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
        </div>

        <button
          className="primary-button analyze-button"
          onClick={runAnalysis}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Running Analysis...
            </>
          ) : (
            "Run Analysis"
          )}
        </button>

        {analysis && (
          <button
            className="secondary-button new-analysis-button"
            onClick={resetAnalysis}
          >
            New Analysis
          </button>
        )}
      </section>

      {error && (
        <div className="error-box">
          <strong>Analysis Error</strong>
          <span>{error}</span>
        </div>
      )}

      {loading && (
        <div className="loading-box">
          <div className="loading-spinner large"></div>
          <div>
            <strong>AI analysis in progress</strong>
            <span>
              Processing geothermal prospectivity for {region}...
            </span>
          </div>
        </div>
      )}

      <section className="map-section">
        <div className="section-heading">
          <div>
            <div className="section-label">SPATIAL ANALYSIS</div>
            <h2>Geothermal Prospectivity Map</h2>
          </div>

          {region && (
            <div className="selected-region">
              Selected: <strong>{region}</strong>
            </div>
          )}
        </div>

        <MapView
          selectedRegion={region}
          analysis={analysis}
        />
      </section>

      {analysis && (
        <section className="result-section">
          <div className="section-heading">
            <div>
              <div className="section-label">AI OUTPUT</div>
              <h2>Geothermal Analysis Result</h2>
            </div>

            <div className="completed-badge">
              ✓ Analysis completed
            </div>
          </div>

          <div className="result-grid">
            <div className="result-card highlight">
              <span>Geothermal Probability</span>
              <strong>
                {Math.round(
                  analysis.geothermal_probability * 100
                )}
                %
              </strong>
              <small>Resource presence probability</small>
            </div>

            <div className="result-card">
              <span>Temperature Forecast</span>
              <strong>
                {analysis.temperature_forecast} °C
              </strong>
              <small>Estimated subsurface temperature</small>
            </div>

            <div className="result-card">
              <span>Depth Forecast</span>
              <strong>
                {analysis.depth_forecast} m
              </strong>
              <small>Estimated target depth</small>
            </div>

            <div className="result-card">
              <span>Risk Level</span>
              <strong className="risk-value">
                {String(analysis.risk_level).toUpperCase()}
              </strong>
              <small>Exploration risk assessment</small>
            </div>

            <div className="result-card">
              <span>Prospectivity Index</span>
              <strong>
                {analysis.prospectivity_index}
              </strong>
              <small>Overall geothermal prospectivity</small>
            </div>

            <div className="result-card">
              <span>Study Region</span>
              <strong>{region}</strong>
              <small>Current analysis area</small>
            </div>
          </div>
        </section>
      )}

      <footer className="app-footer">
        <span>GeoThermAI Explorer</span>
        <span>AI-powered geothermal exploration platform</span>
      </footer>
    </main>
  );
}

export default App;
