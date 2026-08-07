from fastapi import FastAPI

app = FastAPI(
    title="GeoThermAI Explorer AI Engine",
    description="AI engine for geothermal prospectivity analysis",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "service": "GeoThermAI AI Engine",
        "status": "running",
        "version": "1.0.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/predict")
def predict():
    return {
        "geothermal_probability": 0.78,
        "temperature_forecast": 92,
        "depth_forecast": 1850,
        "risk_level": "medium",
        "prospectivity_index": 0.81,
    }
    