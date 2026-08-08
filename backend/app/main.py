from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from urllib.request import Request, urlopen
import json


app = FastAPI(
    title="GeoThermAI Explorer API",
    description="AI-powered geothermal exploration platform",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalysisRequest(BaseModel):
    region: str


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
def analyze(request: AnalysisRequest):
    if not request.region:
        raise HTTPException(
            status_code=400,
            detail="Region is required"
        )

    payload = json.dumps({
        "region": request.region
    }).encode("utf-8")

    try:
        ai_request = Request(
            "http://ai-engine:8001/predict",
            data=payload,
            headers={
                "Content-Type": "application/json"
            },
            method="POST",
        )

        with urlopen(ai_request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))

        return {
            "status": "success",
            "region": request.region,
            "analysis": result,
        }

    except Exception as e:
        raise HTTPException(
            status_code=502,
            detail=f"AI Engine error: {str(e)}"
        )
