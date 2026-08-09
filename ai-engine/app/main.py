from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


app = FastAPI(
    title="GeoThermAI Explorer AI Engine",
    description="AI engine for geothermal prospectivity analysis",
    version="1.1.0",
)


class PredictionRequest(BaseModel):
    region: str


# Competition MVP demonstration dataset.
# This layer is intentionally deterministic and will later
# be replaced by the trained ML inference pipeline.
REGIONAL_PREDICTIONS = {
    "tashkent": {
        "geothermal_probability": 0.78,
        "temperature_forecast": 92,
        "depth_forecast": 1850,
        "risk_level": "medium",
        "prospectivity_index": 0.81,
    },
    "samarkand": {
        "geothermal_probability": 0.72,
        "temperature_forecast": 86,
        "depth_forecast": 2100,
        "risk_level": "medium",
        "prospectivity_index": 0.74,
    },
    "bukhara": {
        "geothermal_probability": 0.81,
        "temperature_forecast": 101,
        "depth_forecast": 2400,
        "risk_level": "medium",
        "prospectivity_index": 0.84,
    },
    "navoi": {
        "geothermal_probability": 0.76,
        "temperature_forecast": 96,
        "depth_forecast": 2250,
        "risk_level": "medium",
        "prospectivity_index": 0.78,
    },
    "jizzakh": {
        "geothermal_probability": 0.74,
        "temperature_forecast": 89,
        "depth_forecast": 1950,
        "risk_level": "medium",
        "prospectivity_index": 0.76,
    },
    "surkhandarya": {
        "geothermal_probability": 0.85,
        "temperature_forecast": 108,
        "depth_forecast": 2600,
        "risk_level": "high",
        "prospectivity_index": 0.88,
    },
    "kashkadarya": {
        "geothermal_probability": 0.83,
        "temperature_forecast": 104,
        "depth_forecast": 2450,
        "risk_level": "high",
        "prospectivity_index": 0.86,
    },
    "fergana": {
        "geothermal_probability": 0.79,
        "temperature_forecast": 91,
        "depth_forecast": 1800,
        "risk_level": "medium",
        "prospectivity_index": 0.82,
    },
    "andijan": {
        "geothermal_probability": 0.75,
        "temperature_forecast": 88,
        "depth_forecast": 1900,
        "risk_level": "medium",
        "prospectivity_index": 0.77,
    },
    "namangan": {
        "geothermal_probability": 0.77,
        "temperature_forecast": 90,
        "depth_forecast": 1950,
        "risk_level": "medium",
        "prospectivity_index": 0.79,
    },
    "syrdarya": {
        "geothermal_probability": 0.68,
        "temperature_forecast": 82,
        "depth_forecast": 2200,
        "risk_level": "medium",
        "prospectivity_index": 0.69,
    },
    "khorezm": {
        "geothermal_probability": 0.64,
        "temperature_forecast": 78,
        "depth_forecast": 2300,
        "risk_level": "low",
        "prospectivity_index": 0.63,
    },
    "karakalpakstan": {
        "geothermal_probability": 0.61,
        "temperature_forecast": 76,
        "depth_forecast": 2500,
        "risk_level": "low",
        "prospectivity_index": 0.60,
    },
}


REGION_ALIASES = {
    "tashkent region": "tashkent",
    "tashkent": "tashkent",
    "samarkand region": "samarkand",
    "samarkand": "samarkand",
    "bukhara region": "bukhara",
    "bukhara": "bukhara",
    "navoi region": "navoi",
    "navoi": "navoi",
    "jizzakh region": "jizzakh",
    "jizzakh": "jizzakh",
    "surkhandarya region": "surkhandarya",
    "surkhandarya": "surkhandarya",
    "kashkadarya region": "kashkadarya",
    "kashkadarya": "kashkadarya",
    "fergana region": "fergana",
    "fergana": "fergana",
    "andijan region": "andijan",
    "andijan": "andijan",
    "namangan region": "namangan",
    "namangan": "namangan",
    "syrdarya region": "syrdarya",
    "syrdarya": "syrdarya",
    "khorezm region": "khorezm",
    "khorezm": "khorezm",
    "karakalpakstan region": "karakalpakstan",
    "karakalpakstan": "karakalpakstan",
}


def normalize_region(region: str) -> str:
    normalized = " ".join(region.strip().lower().split())

    if normalized in REGION_ALIASES:
        return REGION_ALIASES[normalized]

    return normalized


@app.get("/")
def root():
    return {
        "service": "GeoThermAI AI Engine",
        "status": "running",
        "version": "1.1.0",
        "model": "regional-mvp-demonstration",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "version": "1.1.0",
    }


@app.post("/predict")
def predict(request: PredictionRequest):
    region_key = normalize_region(request.region)

    if region_key not in REGIONAL_PREDICTIONS:
        raise HTTPException(
            status_code=400,
            detail={
                "message": "Unsupported region",
                "region": request.region,
                "supported_regions": sorted(REGIONAL_PREDICTIONS.keys()),
            },
        )

    prediction = REGIONAL_PREDICTIONS[region_key]

    return {
        "region": request.region,
        **prediction,
    }
