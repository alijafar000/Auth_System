# 🔐 Auth System Backend

A complete RESTful authentication backend built using **Node.js, Express.js, MongoDB, JWT, and bcrypt**.

This project provides a complete user authentication and password recovery system with registration, email verification, login, JWT-based authentication, logout, forgot password, OTP verification, and password change functionality.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Authentication Flow](#-authentication-flow)
- [Password Reset Flow](#-password-reset-flow)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Installation & Setup](#-installation--setup)
- [Clone and Run Locally](#-clone-and-run-locally)
- [API Testing](#-api-testing)
- [Authentication](#-authentication)
- [Database](#-database)
- [Security Features](#-security-features)
- [Error Handling](#-error-handling)
- [Project Highlights](#-project-highlights)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

# 📖 Project Overview

The **Auth System Backend** is a REST API designed to handle user authentication and account security.

The backend provides APIs for:

- User registration
- Email verification
- User login
- JWT access token generation
- Refresh token generation
- Protected routes
- User logout
- Forgot password
- OTP generation
- OTP verification
- Password change
- Password hashing
- Request validation

The application uses **MongoDB** as the database and **JWT** for authentication.

---

# ✨ Features

## 👤 User Authentication

- User registration
- Email and password validation
- Password hashing using bcrypt
- Email verification
- Login authentication
- Access token generation
- Refresh token generation
- Protected routes
- Logout functionality

## 📧 Email Verification

After registration:

1. User account is created.
2. Password is securely hashed.
3. Verification token is generated.
4. Verification email is sent.
5. User opens the verification link.
6. Backend validates the token.
7. User's `isVerified` status is updated.
8. User can now login.

---

## 🔑 JWT Authentication

The project uses JSON Web Tokens for authentication.

After successful login, the backend generates:

- Access Token
- Refresh Token

Protected APIs require the access token in the request header.

```http
Authorization: Bearer <access-token>
