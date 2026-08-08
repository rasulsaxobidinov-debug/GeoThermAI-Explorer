import { useState } from "react";

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
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
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
        body: JSON.stringify({ region }),
      });

      if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
      }

      const data = await response.json();

      if (data.status !== "success" || !data.analysis) {
        throw new Error("Invalid analysis response.");
      }

      setResult(data);
    } catch (err) {
      setError(`Analysis Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const backToAnalysis = () => {
    setResult(null);
    setError("");
  };

  if (showAnalysis) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #f4f8fb 0%, #e8f0f5 100%)",
          fontFamily: "Arial, sans-serif",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "#0B3C5D",
              color: "white",
              padding: "28px 32px",
              borderRadius: "16px",
              marginBottom: "28px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "32px" }}>
              GeoThermAI Explorer
            </h1>

            <p
              style={{
                margin: "8px 0 0",
                opacity: 0.9,
                fontSize: "16px",
              }}
            >
              Geothermal Analysis Module
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "28px",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              marginBottom: "24px",
            }}
          >
            {!result && (
              <>
                <h2
                  style={{
                    marginTop: 0,
                    color: "#0B3C5D",
                  }}
                >
                  Geothermal Analysis
                </h2>

                <p style={{ color: "#5f6b73" }}>
                  Select a region and start the geothermal resource analysis.
                </p>
              </>
            )}

            <label
              style={{
                display: "block",
                fontWeight: "bold",
                color: "#263238",
                marginBottom: "10px",
              }}
            >
              Region
            </label>

            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setResult(null);
                setError("");
              }}
              style={{
                width: "100%",
                maxWidth: "420px",
                padding: "13px 14px",
                borderRadius: "8px",
                border: "1px solid #c7d2d9",
                fontSize: "16px",
                background: "white",
              }}
            >
              <option value="">Choose region</option>

              {regions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {!result && (
              <button
                onClick={runAnalysis}
                disabled={loading}
                style={{
                  display: "block",
                  marginTop: "22px",
                  padding: "13px 24px",
                  border: "none",
                  borderRadius: "8px",
                  background: loading ? "#8ca5b5" : "#0B3C5D",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: loading ? "wait" : "pointer",
                }}
              >
                {loading ? "Running Analysis..." : "Run Analysis"}
              </button>
            )}

            {error && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "14px 16px",
                  borderRadius: "8px",
                  background: "#fff1f1",
                  color: "#a33a3a",
                  border: "1px solid #f0c5c5",
                }}
              >
                {error}
              </div>
            )}
          </div>

          {result && (
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                  marginBottom: "28px",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: 0,
                      color: "#0B3C5D",
                    }}
                  >
                    Geothermal Analysis Result
                  </h2>

                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "#66757f",
                    }}
                  >
                    Region: <strong>{result.region}</strong>
                  </p>
                </div>

                <div
                  style={{
                    padding: "8px 14px",
                    borderRadius: "20px",
                    background: "#e8f6ee",
                    color: "#287a4b",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  ✓ Analysis completed
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(190px, 1fr))",
                  gap: "18px",
                }}
              >
                <MetricCard
                  title="Geothermal Probability"
                  value={`${Math.round(
                    result.analysis.geothermal_probability * 100
                  )}%`}
                  subtitle="Resource probability"
                />

                <MetricCard
                  title="Temperature Forecast"
                  value={`${result.analysis.temperature_forecast} °C`}
                  subtitle="Estimated temperature"
                />

                <MetricCard
                  title="Depth Forecast"
                  value={`${result.analysis.depth_forecast} m`}
                  subtitle="Estimated depth"
                />

                <MetricCard
                  title="Prospectivity Index"
                  value={result.analysis.prospectivity_index.toFixed(2)}
                  subtitle="Exploration potential"
                />
              </div>

              <div
                style={{
                  marginTop: "22px",
                  padding: "22px",
                  borderRadius: "12px",
                  background: "#f7f9fa",
                  border: "1px solid #e1e7eb",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        color: "#263238",
                        fontSize: "17px",
                      }}
                    >
                      Risk Level
                    </strong>

                    <div
                      style={{
                        marginTop: "5px",
                        color: "#66757f",
                        fontSize: "14px",
                      }}
                    >
                      Current exploration risk assessment
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "9px 18px",
                      borderRadius: "20px",
                      background: "#fff3cd",
                      color: "#856404",
                      fontWeight: "bold",
                    }}
                  >
                    {result.analysis.risk_level.toUpperCase()}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "22px",
                  padding: "22px",
                  borderRadius: "12px",
                  background: "#f7f9fa",
                  border: "1px solid #e1e7eb",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <strong>Prospectivity Score</strong>
                  <strong>
                    {Math.round(
                      result.analysis.prospectivity_index * 100
                    )}
                    %
                  </strong>
                </div>

                <div
                  style={{
                    height: "12px",
                    background: "#dce5ea",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${
                        result.analysis.prospectivity_index * 100
                      }%`,
                      height: "100%",
                      background: "#D4AF37",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>

              <button
                onClick={backToAnalysis}
                style={{
                  marginTop: "26px",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid #0B3C5D",
                  background: "white",
                  color: "#0B3C5D",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ← Back to Analysis
              </button>
            </div>
          )}

          <button
            onClick={() => {
              setShowAnalysis(false);
              setResult(null);
              setError("");
            }}
            style={{
              marginTop: "22px",
              background: "transparent",
              border: "none",
              color: "#0B3C5D",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #f4f8fb 0%, #e8f0f5 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          background: "white",
          padding: "55px 35px",
          borderRadius: "20px",
          boxShadow: "0 10px 35px rgba(0,0,0,0.10)",
        }}
      >
        <h1
          style={{
            color: "#0B3C5D",
            fontSize: "40px",
            marginBottom: "12px",
          }}
        >
          GeoThermAI Explorer
        </h1>

        <p
          style={{
            color: "#66757f",
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          AI-powered geothermal exploration platform
        </p>

        <button
          onClick={() => setShowAnalysis(true)}
          style={{
            padding: "14px 28px",
            border: "none",
            borderRadius: "9px",
            background: "#0B3C5D",
            color: "white",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Start Analysis
        </button>
      </div>
    </div>
  );
}

function MetricCard({ title, value, subtitle }) {
  return (
    <div
      style={{
        padding: "22px",
        borderRadius: "12px",
        background: "#f7f9fa",
        border: "1px solid #e1e7eb",
      }}
    >
      <div
        style={{
          color: "#66757f",
          fontSize: "14px",
          marginBottom: "12px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#0B3C5D",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {value}
      </div>

      <div
        style={{
          marginTop: "7px",
          color: "#87949c",
          fontSize: "13px",
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

export default App;
