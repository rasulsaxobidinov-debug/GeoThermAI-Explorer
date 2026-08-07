# Contributing to GeoThermAI Explorer

First of all, thank you for your interest in contributing to **GeoThermAI Explorer**.

GeoThermAI Explorer is an Artificial Intelligence platform for geothermal resource exploration and assessment. The project integrates geospatial analysis, geophysical datasets, machine learning, and GIS technologies to support scientific research and decision-making.

We welcome contributions from researchers, software engineers, GIS specialists, data scientists, students, and domain experts.

---

# Table of Contents

* Code of Conduct
* Project Philosophy
* Repository Structure
* Development Workflow
* Branch Strategy
* Coding Standards
* Documentation Standards
* Commit Message Convention
* Pull Request Guidelines
* Reporting Issues
* Security
* Contact

---

# Code of Conduct

By participating in this project, you agree to respect other contributors and maintain a professional, collaborative, and inclusive environment.

Please read the `CODE_OF_CONDUCT.md` before contributing.

---

# Project Philosophy

GeoThermAI Explorer follows these principles:

* Scientific accuracy
* Transparency
* Reproducibility
* Clean architecture
* Open collaboration
* Sustainable development
* High-quality documentation

Every contribution should improve the overall quality of the project.

---

# Repository Structure

```text
frontend/          Web application
backend/           FastAPI services
ai-engine/         Machine learning models
datasets/          Sample and public datasets
docs/              Documentation
assets/            Images and branding
docker/            Docker configuration
scripts/           Utility scripts
```

Please keep new files inside the appropriate directory.

---

# Development Workflow

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test your code.
5. Update documentation if necessary.
6. Commit using the project convention.
7. Submit a Pull Request.

---

# Branch Strategy

Main branches:

* `main` — stable production-ready code
* `develop` — active development

Feature branches:

```text
feature/map-module
feature/authentication
feature/dashboard
feature/ai-engine
feature/report-generator
```

Bug fixes:

```text
fix/login-page
fix/database-connection
fix/report-export
```

Documentation:

```text
docs/readme-update
docs/api
docs/architecture
```

---

# Coding Standards

## General

* Write clean and readable code.
* Keep functions small and focused.
* Avoid duplicated logic.
* Use descriptive names.
* Add comments only where necessary.

---

## Python

* Follow PEP 8.
* Use type hints whenever practical.
* Format code with Black.
* Sort imports with isort.

---

## TypeScript / React

* Use TypeScript for all new code.
* Prefer functional components.
* Keep components modular and reusable.
* Avoid unnecessary complexity.

---

## API

* Follow REST principles.
* Use consistent endpoint naming.
* Return meaningful HTTP status codes.
* Validate user input.

---

# Documentation Standards

Documentation is considered part of the project.

Please update documentation whenever functionality changes.

Documentation should be:

* clear
* concise
* technically accurate
* written in English

---

# Commit Message Convention

Use short and descriptive commit messages.

Examples:

```text
Add authentication module

Implement AI prediction service

Create landing page

Update documentation

Fix map rendering

Improve dashboard layout
```

Avoid messages such as:

```text
Update

Fix

Changes

Test
```

---

# Pull Request Guidelines

Before opening a Pull Request, please ensure:

* Code builds successfully.
* Tests pass.
* Documentation is updated.
* No unnecessary files are included.
* Commit history is clean.

Describe:

* What changed
* Why it changed
* How it was tested

---

# Reporting Issues

When creating an Issue, include:

* Description
* Expected behavior
* Actual behavior
* Steps to reproduce
* Screenshots (if applicable)
* Environment information

---

# Security

Please do not publish:

* passwords
* API keys
* database credentials
* private datasets
* confidential information

If you discover a security issue, please report it privately rather than opening a public issue.

---

# Documentation Contributions

Documentation improvements are always welcome.

Examples:

* README updates
* API documentation
* User Guide
* Installation Guide
* Architecture diagrams
* Tutorials

---

# AI Model Contributions

When contributing AI models:

* Describe the methodology.
* Document training data.
* Include evaluation metrics.
* Explain limitations.
* Provide reproducible results where possible.

---

# GIS Contributions

Supported formats include:

* GeoJSON
* GeoTIFF
* Shapefile
* GPKG
* CSV
* DEM

Please provide metadata whenever possible.

---

# Testing

Whenever applicable:

* Test before committing.
* Verify existing functionality.
* Avoid introducing breaking changes.

---

# License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

# Thank You

Thank you for helping improve GeoThermAI Explorer.

Together we are building an intelligent platform that supports geothermal exploration through Artificial Intelligence and geospatial technologies.
