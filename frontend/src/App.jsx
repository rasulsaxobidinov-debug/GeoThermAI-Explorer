import { useState } from "react";

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);

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
          <select>
            <option value="">Choose region</option>
            <option>Tashkent</option>
            <option>Samarkand</option>
            <option>Bukhara</option>
            <option>Navoi</option>
            <option>Jizzakh</option>
            <option>Surkhandarya</option>
            <option>Kashkadarya</option>
            <option>Fergana</option>
            <option>Andijan</option>
            <option>Namangan</option>
            <option>Syrdarya</option>
            <option>Khorezm</option>
            <option>Karakalpakstan</option>
          </select>
        </label>

        <br />
        <br />

        <button
          onClick={() =>
            alert("Analysis module will be launched here.")
          }
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
