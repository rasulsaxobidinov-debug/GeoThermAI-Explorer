import { useState } from "react";

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const runAnalysis = async () => {
    if (!region) {
      setError("Please select a region first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          region: region,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Analysis failed.");
      }

      setResult(data);
    } catch (err) {
      setError(err.message || "Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  if (showAnalysis) {
    return (
      <div>
        <h1>GeoThermAI Explorer</h1>

        <h2>Geothermal Analysis Module</h2>

        <p>
          Select a region and start the geothermal resource analysis.
        </p>

        <label>
          Region:{" "}
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setResult(null);
              setError("");
            }}
          >
            <option value="">Choose region</option>
            <option value="Tashkent">Tashkent</option>
            <option value="Samarkand">Samarkand</option>
            <option value="Bukhara">Bukhara</option>
            <option value="Navoi">Navoi</option>
            <option value="Jizzakh">Jizzakh</option>
            <option value="Surkhandarya">Surkhandarya</option>
            <option value="Kashkadarya">Kashkadarya</option>
            <option value="Fergana">Fergana</option>
            <option value="Andijan">Andijan</option>
            <option value="Namangan">Namangan</option>
            <option value="Syrdarya">Syrdarya</option>
            <option value="Khorezm">Khorezm</option>
            <option value="Karakalpakstan">Karakalpakstan</option>
          </select>
        </label>

        <br />
        <br />

        <button onClick={runAnalysis} disabled={loading}>
          {loading ? "Analyzing..." : "Run Analysis"}
        </button>

        {error && (
          <div>
            <h3>Analysis Error</h3>
            <p>{error}</p>
          </div>
        )}

        {result && result.analysis && (
          <div>
            <h2>Geothermal Analysis Result</h2>

            <p>
              <strong>Region:</strong> {result.region}
            </p>

            <p>
              <strong>Geothermal Probability:</strong>{" "}
              {(result.analysis.geothermal_probability * 100).toFixed(0)}%
            </p>

            <p>
              <strong>Temperature Forecast:</strong>{" "}
              {result.analysis.temperature_forecast} °C
            </p>

            <p>
              <strong>Depth Forecast:</strong>{" "}
              {result.analysis.depth_forecast} m
            </p>

            <p>
              <strong>Risk Level:</strong>{" "}
              {result.analysis.risk_level.toUpperCase()}
            </p>

            <p>
              <strong>Prospectivity Index:</strong>{" "}
              {result.analysis.prospectivity_index}
            </p>

            <p>
              <strong>Status:</strong> Analysis completed
            </p>
          </div>
        )}

        <br />

        <button
          onClick={() => {
            setShowAnalysis(false);
            setResult(null);
            setError("");
          }}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>GeoThermAI Explorer</h1>

      <p>AI-powered geothermal exploration platform</p>

      <button onClick={() => setShowAnalysis(true)}>
        Start Analysis
      </button>
    </div>
  );
}

export default App;
