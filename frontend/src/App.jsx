import { useState } from "react";

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [region, setRegion] = useState("");

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
            onChange={(e) => setRegion(e.target.value)}
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

        <button
          onClick={() => {
            if (!region) {
              alert("Please select a region first.");
              return;
            }
            alert(`Analysis started for ${region}.`);
          }}
        >
          Run Analysis
        </button>

        <br />
        <br />

        <button onClick={() => setShowAnalysis(false)}>
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
