# 📈 StockSphere – Full Stack Trading Platform

A **full-stack stock trading platform** inspired by Zerodha, built to understand how **real trading systems, dashboards, and authentication flows** work in production applications.

This project includes a **marketing website, authentication system, and protected dashboard**, closely mimicking real-world fintech platforms.

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication
- Secure cookies using `httpOnly`
- Protected routes using token verification

### 🌐 Landing Website
- Home, About, Products, Pricing, Support pages
- Responsive UI using Bootstrap
- Real Zerodha-inspired design & layout
- Call-to-Action flows (Sign up buttons across pages)

### 📊 Trading Dashboard 
- Auth-protected dashboard entry
- Portfolio & trading components
- Order placement (Buy / Sell)
- Holdings & Positions tracking

---

## 🧠 Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios
- React Toastify
- Bootstrap
- Context API
- CSS (custom + utility styling)

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt
- Cookie-based sessions

---
## 🔑 API Endpoints (Backend)

| Method | Endpoint | Description |
|------|--------|-------------|
| POST | /signup | Register new user |
| POST | /login | Authenticate user |
| POST | / | Verify JWT cookie |
| GET | /allHoldings | Fetch holdings |
| GET | /allPositions | Fetch positions |
| POST | /newOrder | Place Buy/Sell order |

## ⚙️ Local Setup

### Backend

```bash
cd backend
npm install
npm start
```
### Create a `.env` file inside the **backend** folder:

```env
PORT=3002
MONGO_URL=your_mongodb_uri
TOKEN_KEY=your_jwt_secret
```

### Frontend
```bash
cd frontend
npm install
npm start
```
---


