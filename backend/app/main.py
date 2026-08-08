from fastapi import FastAPI, HTTPException
import urllib.request
import json

app = FastAPI(
    title="GeoThermAI Explorer API",
    description="AI-powered geothermal exploration platform",
    version="1.0.0",
)

AI_ENGINE_URL = "http://ai-engine:8001/predict"


@app.get("/")
def root():
    return {
        "project": "GeoThermAI Explorer",
        "status": "running",
        "version": "1.0.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/analyze")
def analyze(data: dict):
    region = data.get("region")

    if not region:
        raise HTTPException(
            status_code=400,
            detail="Region is required"
        )

    payload = json.dumps({
        "region": region
    }).encode("utf-8")

    request = urllib.request.Request(
        AI_ENGINE_URL,
        data=payload,
        headers={
            "Content-Type": "application/json"
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))

        return {
            "region": region,
            "status": "success",
            "analysis": result
        }

    except Exception as e:
        raise HTTPException(
            status_code=502,
            detail=f"AI Engine error: {str(e)}"
        )

