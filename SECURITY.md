# Security Policy

## Overview

GeoThermAI Explorer is an Artificial Intelligence platform for geothermal resource exploration and assessment. Security is an essential part of the project because the platform processes user accounts, geospatial information, AI workflows, and scientific datasets.

We appreciate responsible disclosure of security vulnerabilities and are committed to addressing verified issues in a timely manner.

---

# Supported Versions

The following table indicates which versions currently receive security updates.

| Version                     | Supported     |
| --------------------------- | ------------- |
| 1.x                         | ✅             |
| 0.x (Development)           | ✅ Best effort |
| Older experimental versions | ❌             |

---

# Reporting a Vulnerability

If you discover a security vulnerability, please **do not create a public GitHub Issue**.

Instead:

1. Prepare a detailed description of the vulnerability.
2. Include steps to reproduce the issue.
3. Explain the potential impact.
4. Provide screenshots or logs if appropriate.
5. Contact the project maintainers privately.

Please allow reasonable time for investigation before publicly disclosing the issue.

---

# Response Process

After receiving a report, the project team will:

1. Acknowledge receipt of the report.
2. Assess the severity and impact.
3. Reproduce the issue.
4. Develop and test a fix.
5. Publish the fix in a future release.
6. Credit the reporter where appropriate.

---

# Security Best Practices

Contributors should:

* Never commit passwords or API keys.
* Never commit `.env` files.
* Validate all user input.
* Follow the principle of least privilege.
* Keep dependencies up to date.
* Review code before merging.
* Use HTTPS in production.
* Store secrets securely.

---

# Data Protection

GeoThermAI Explorer may process:

* User account information
* Public geospatial datasets
* Geological and geophysical data
* AI inference results
* Generated reports

Sensitive information should be protected from unauthorized access and handled according to applicable laws and organizational policies.

---

# Authentication

The planned authentication system includes:

* Secure password hashing
* JWT-based authentication
* Role-based access control (RBAC)
* Session expiration
* Email verification (planned)
* Password reset workflow (planned)

---

# API Security

The backend API should:

* Validate all requests.
* Return appropriate HTTP status codes.
* Limit request rates where appropriate.
* Authenticate protected endpoints.
* Log security-related events.
* Avoid exposing internal implementation details.

---

# File Upload Security

Uploaded files should:

* Be validated before processing.
* Be scanned where applicable.
* Respect file size limits.
* Be stored outside the public web root.
* Be associated with the authenticated user.

---

# AI and Data Integrity

To maintain scientific integrity:

* Preserve original input datasets.
* Record processing parameters.
* Track model versions.
* Document assumptions and limitations.
* Ensure reproducibility whenever possible.

---

# Third-Party Dependencies

Dependencies should be reviewed regularly and updated to supported versions to reduce security risks.

---

# Responsible Disclosure

We value responsible security research and encourage coordinated disclosure that allows sufficient time to investigate and resolve confirmed issues.

---

# Contact

Security-related communications should be directed privately to the project maintainers.

A dedicated security contact address will be added before the first public release.

---

# Policy Updates

This Security Policy may be updated as the project evolves. Major changes will be documented in the project changelog.
