# 🌍 GeoThermAI Explorer

### AI-Powered Geothermal Exploration & Decision-Support Platform
---

## 🚀 Project Overview

Geothermal exploration requires the integration and interpretation of multiple sources of geological, geophysical, geothermal and spatial information.

**GeoThermAI Explorer** provides a unified digital environment for preliminary geothermal prospectivity assessment.

The Competition MVP demonstrates an end-to-end workflow:

1. Select a region of Uzbekistan.
2. Use demonstration data or provide exploration data.
3. Run the AI-assisted analysis.
4. Evaluate geothermal probability, predicted temperature, estimated depth, risk level and prospectivity.
5. Visualize thermal anomalies, structural features and recommended exploration targets on the map.

The platform is designed as a decision-support system for **preliminary exploration assessment**, not as a replacement for detailed geological or geophysical investigation.

---

## 🎯 Vision

To develop an intelligent digital platform that accelerates geothermal exploration in Uzbekistan by combining geospatial analysis, scientific data and Artificial Intelligence.

## 🎯 Mission

To provide researchers, government institutions and energy-sector stakeholders with an accessible AI-assisted environment for preliminary geothermal resource assessment and exploration planning.

---

## ⭐ Key Objectives

- Integrate heterogeneous geoscientific and spatial datasets.
- Apply Artificial Intelligence to geothermal prospectivity assessment.
- Visualize geothermal indicators on an interactive map.
- Estimate preliminary resource probability, temperature and depth.
- Identify potentially promising exploration targets.
- Support evidence-based exploration planning.
- Reduce preliminary exploration uncertainty and time.
- Contribute to sustainable geothermal energy development in Uzbekistan.

---

## 👥 Target Users

- Geological and geophysical research institutions
- Government agencies
- Energy companies
- Universities and research centers
- Geological survey organizations
- Geothermal exploration teams
- Investors and development organizations

---

## 🇺🇿 Geographic Focus

The initial Competition MVP focuses on **Uzbekistan** and provides regional analysis capabilities for the country's major administrative regions.

The platform currently includes:

- Tashkent
- Samarkand
- Bukhara
- Navoi
- Jizzakh
- Surkhandarya
- Kashkadarya
- Fergana
- Andijan
- Namangan
- Syrdarya
- Khorezm
- Karakalpakstan

The architecture is designed to support future expansion toward more detailed local-scale exploration datasets.

---

## 🧠 AI-Assisted Analysis

The MVP provides preliminary AI-assisted indicators including:

| Indicator | Description |
|---|---|
| Geothermal Probability | Estimated probability of a promising geothermal resource |
| Temperature Forecast | Preliminary predicted subsurface temperature |
| Depth Forecast | Estimated depth of the potential geothermal target |
| Risk Level | Qualitative assessment of exploration risk |
| Prospectivity Index | Integrated indicator of geothermal potential |

The current competition version uses demonstration and analytical datasets to illustrate the complete workflow.

Future versions will incorporate larger validated geological, geophysical, geothermal, remote-sensing and field datasets.

---

## 🗺️ Interactive Geospatial Visualization

The analysis interface provides an interactive map for visualization of:

- Geothermal exploration points
- Thermal anomalies
- Geological and structural features
- Fault-related exploration indicators
- Recommended exploration targets
- Regional prospectivity information

The map is intended to provide an intuitive spatial representation of the AI-assisted assessment results.
---

## 🛠️ Technology Stack

### Frontend

- React 18
- Vite
- React Leaflet
- Leaflet
- Responsive CSS

### Backend

- Python
- FastAPI
- REST API
- Uvicorn

### AI Engine

- Python
- FastAPI
- AI-assisted analytical workflow
- Geospatial and numerical processing

### Database

- PostgreSQL
- PostGIS

### Infrastructure

- Podman / Podman Compose
- Docker-compatible container architecture
- Nginx for production frontend serving

### Development Environment

- Linux
- Git
- GitHub

---

## 🏗️ System Architecture

GeoThermAI Explorer follows a modular service-oriented architecture:

```text
                    ┌──────────────────────────┐
                    │       User / Researcher  │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │ React + Vite Frontend    │
                    │ Interactive GIS Interface│
                    └────────────┬─────────────┘
                                 │ REST API
                                 ▼
                    ┌──────────────────────────┐
                    │ FastAPI Backend          │
                    │ Application API          │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────┴─────────────┐
                    │                          │
                    ▼                          ▼
          ┌──────────────────┐       ┌──────────────────┐
          │ AI Engine        │       │ PostgreSQL/PostGIS│
          │ Analysis Service  │       │ Spatial Database │
          └──────────────────┘       └──────────────────┘
---

## 💻 Competition MVP Features

The current MVP includes:

### Landing Page

- GeoThermAI Explorer project introduction
- Uzbekistan-focused geothermal exploration concept
- Clear **Start Analysis** workflow
- Responsive user interface

### Analysis Module

Users can:

1. Select an administrative region.
2. Run an AI-assisted analysis.
3. Receive geothermal assessment indicators.
4. Review analytical results.
5. Explore results on an interactive map.
6. Start a new analysis.

### Analysis Results

The interface presents:

- Geothermal probability
- Temperature forecast
- Depth forecast
- Risk level
- Prospectivity index
- Exploration recommendations

### GIS Map

The interactive map provides:

- Regional navigation
- Exploration points
- Thermal anomaly visualization
- Fault and structural indicators
- Recommended prospectivity targets
- Interactive map markers and information panels

---

## 📁 Project Structure

```text
GeoThermAlExplorer/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── ...
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── ai-engine/
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── datasets/
├── docs/
├── docker-compose.yml
├── README.md
├── LICENSE
└── .gitignore
---
