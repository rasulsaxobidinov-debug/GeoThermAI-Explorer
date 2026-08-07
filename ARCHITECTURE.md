# GeoThermAI Explorer Architecture

## System Overview

GeoThermAI Explorer is an Artificial Intelligence platform for geothermal resource exploration and assessment. The system integrates geospatial technologies, geophysical datasets, machine learning, and interactive visualization into a unified decision-support platform.

The architecture is designed to be modular, scalable, and cloud-ready while remaining lightweight enough for the MVP.

---

# Architecture Principles

The platform is designed according to the following principles:

* Modular architecture
* Separation of concerns
* API-first development
* Scalability
* Security by design
* Explainable AI
* Reproducible scientific workflows
* Cloud-ready deployment

---

# High-Level Architecture

```text
                        +---------------------------+
                        |        Web Browser        |
                        +------------+--------------+
                                     |
                                     v
+-----------------------------------------------------------+
|                     Frontend (Next.js)                    |
|                                                           |
|  Landing Page                                             |
|  Authentication                                           |
|  Dashboard                                                |
|  Interactive Map                                          |
|  AI Analysis                                              |
|  Reports                                                  |
|  User Profile                                             |
+--------------------------+--------------------------------+
                           |
                           | REST API (HTTPS)
                           v
+-----------------------------------------------------------+
|                    Backend (FastAPI)                      |
|                                                           |
| Authentication Service                                    |
| User Management                                           |
| Project Management                                        |
| AI Controller                                             |
| GIS Controller                                            |
| Report Generator                                          |
| Notification Service                                      |
+-----------+----------------------+------------------------+
            |                      |
            |                      |
            v                      v
+---------------------+   +-------------------------------+
| PostgreSQL + PostGIS|   |         AI Engine             |
|                     |   |                               |
| Users               |   | Data Preprocessing            |
| Projects            |   | Feature Engineering           |
| Datasets            |   | Prediction Models             |
| Reports             |   | GeoTherm Index                |
| Logs                |   | Explainable AI                |
+---------------------+   +-------------------------------+
            |                      |
            +----------+-----------+
                       |
                       v
          +-------------------------------+
          |   Geospatial Data Sources     |
          |-------------------------------|
          | Geological Maps               |
          | Fault Maps                    |
          | Magnetotelluric Data          |
          | Gravity Data                  |
          | Geothermal Data               |
          | Satellite Imagery             |
          | DEM                           |
          +-------------------------------+
```

---

# System Components

## Frontend

Technology:

* Next.js
* React
* TypeScript
* Tailwind CSS
* MapLibre GL JS
* Deck.gl

Responsibilities:

* User Interface
* Authentication
* Dashboard
* Interactive GIS Map
* Project Management
* Report Visualization

---

## Backend

Technology:

* FastAPI
* Python

Responsibilities:

* REST API
* Authentication
* Authorization
* Business Logic
* AI orchestration
* Report generation
* File management

---

## Database

Technology:

* PostgreSQL
* PostGIS

Main entities:

* Users
* Organizations
* Projects
* Datasets
* Analyses
* Reports
* Audit Logs

---

## AI Engine

Technology:

* PyTorch
* Scikit-learn
* XGBoost
* GeoPandas
* Rasterio

Responsibilities:

* Data preprocessing
* Feature engineering
* Geothermal prospectivity prediction
* GeoTherm Index calculation
* Explainable AI
* Model versioning

---

## GIS Module

Responsibilities:

* Display geospatial layers
* Layer management
* Coordinate handling
* Spatial queries
* Overlay analysis
* Visualization of thermal anomalies and fault systems

---

# User Roles

## Guest

* View public information
* Explore landing page
* Access documentation

---

## Registered User

* Create projects
* Upload datasets
* Run AI analysis
* View reports
* Download results

---

## Organization

* Manage team members
* Share projects
* Access organization resources

---

## Administrator

* Manage users
* Manage datasets
* Monitor system health
* Review logs
* Configure AI models

---

# Data Flow

1. User logs in.
2. Creates a new project.
3. Selects a study area.
4. Uploads or selects datasets.
5. Backend validates the request.
6. AI Engine preprocesses data.
7. Prediction model generates results.
8. GeoTherm Index is calculated.
9. Results are stored in PostgreSQL.
10. Dashboard displays maps and analytics.
11. User exports the final report.

---

# Repository Structure

```text
GeoThermAI-Explorer/
│
├── frontend/
├── backend/
├── ai-engine/
├── datasets/
├── docs/
├── assets/
├── docker/
├── scripts/
└── .github/
```

---

# Security Architecture

The platform is designed with security in mind:

* JWT authentication
* Role-Based Access Control (RBAC)
* HTTPS communication
* Password hashing
* Input validation
* Secure file handling
* Audit logging
* Environment-based configuration

---

# Deployment Architecture

Development:

* Docker Compose
* Local PostgreSQL
* Local AI Engine

Production:

* Reverse Proxy (Nginx)
* Frontend
* Backend API
* PostgreSQL + PostGIS
* AI Engine
* Object Storage
* HTTPS

---

# Scalability

The architecture supports future expansion, including:

* Multiple AI models
* Additional geophysical methods
* Cloud deployment
* Multi-language interface
* Mobile application
* External REST API
* Integration with government information systems

---

# Design Goals

GeoThermAI Explorer is designed to:

* Reduce geothermal exploration uncertainty.
* Improve scientific decision-making.
* Integrate heterogeneous geoscientific datasets.
* Provide explainable AI predictions.
* Support sustainable energy development.
* Serve as a scalable platform for future research and industrial applications.
