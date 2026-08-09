from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="GeoThermAI Explorer AI Engine",
    description="AI engine for geothermal prospectivity analysis",
    version="1.0.0",
)


class PredictionRequest(BaseModel):
    region: str


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
def predict(request: PredictionRequest):
    # Demo AI result for MVP.
    # Later this will be replaced with the real ML model.

    return {
        "region": request.region,
        "geothermal_probability": 0.78,
        "temperature_forecast": 92,
        "depth_forecast": 1850,
        "risk_level": "medium",
        "prospectivity_index": 0.81,
    }
