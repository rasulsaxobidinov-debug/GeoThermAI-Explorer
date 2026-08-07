from fastapi import FastAPI

app = FastAPI(
    title="GeoThermAI Explorer API",
    description="AI-powered geothermal exploration platform",
    version="1.0.0",
)


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