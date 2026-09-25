# 📧 Authentication System Backend

A complete and secure **Authentication System Backend** built with **Node.js, Express.js, and MongoDB**. It provides user registration, email verification, login/logout, forgot password with OTP, and change password functionality with JWT-based authentication and session management.

---

## 🚀 Features

- ✅ User Registration with validation
- ✅ Email Verification via tokenized link (Handlebars + Nodemailer)
- ✅ Secure Login with JWT (Access Token + Refresh Token)
- ✅ Session Management (single active session per user)
- ✅ Logout (destroys session and updates login state)
- ✅ Forgot Password with OTP sent via Email
- ✅ OTP Verification with expiry (10 minutes)
- ✅ Change Password (with confirmation match)
- ✅ Password Hashing using **bcryptjs**
- ✅ Request validation using **Yup**
- ✅ CORS-enabled
- ✅ Environment variable support via **dotenv**

---

## 🛠️ Tech Stack

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| Node.js         | Runtime environment              |
| Express.js      | Web framework                    |
| MongoDB         | Database                         |
| Mongoose        | ODM for MongoDB                  |
| JWT             | Authentication tokens            |
| bcryptjs        | Password hashing                 |
| Nodemailer      | Sending emails (verify + OTP)    |
| Handlebars      | Email templating                 |
| Yup             | Schema-based request validation  |
| Swagger UI      | API documentation                |
| dotenv          | Environment config               |
| cors            | Cross-Origin Resource Sharing    |

---

## 📁 Project Structure

```
authentication-system/
│
├── controller/
│   └── userController.js         # All user-related business logic
│
├── database/
│   └── db.js                     # MongoDB connection
│
├── middleware/
│   └── isAuthenticate.js         # JWT authentication middleware
│
├── models/
│   ├── userModel.js              # User schema
│   └── sessionModel.js           # Session schema
│
├── routes/
│   └── userRoute.js              # User API routes
│
├── validator/
│   └── userValidation.js         # Yup validation schemas
│
├── verifyEmail/
│   ├── verifyEmail.js            # Email verification sender
│   ├── sentOtp.js                # OTP email sender
│   └── template.hbs              # Email verification template
│
├── .env                          # Environment variables
├── .gitignore
├── package.json
├── server.js                     # App entry point
└── README.md
```

---

## ⚙️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/alijafar000/Auth_System.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
USER_MAIL=your_email@gmail.com
USER_PASS=your_gmail_app_password
```

> ⚠️ **Note:** Use a **Gmail App Password** (not your regular password) for `USER_PASS`. Enable 2FA on your Google account and generate an app password from [Google App Passwords](https://myaccount.google.com/apppasswords).

### 4. Run the Server

**Development mode:**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

Server will start at: `http://localhost:8000`

---

## 📚 API Endpoints

| Method | Endpoint                          | Description                       | Auth Required |
| ------ | --------------------------------- | --------------------------------- | ------------- |
| POST   | `/user/register`                  | Register a new user               | ❌            |
| POST   | `/user/verify`                    | Verify email using token          | ✅ (Bearer)   |
| POST   | `/user/login`                     | Login user                        | ❌            |
| POST   | `/user/logout`                    | Logout user                       | ✅ (Bearer)   |
| POST   | `/user/forgot-password`           | Send OTP to email for reset       | ❌            |
| POST   | `/user/verify-otp/:email`         | Verify OTP                        | ❌            |
| POST   | `/user/change-password/:email`    | Change password after OTP verify  | ❌            |

---

### 📌 API Details

#### 🔹 Register User
```http
POST /user/register
Content-Type: application/json

{
  "username": "Jafar Ali",
  "email": "jafar@gmail.com",
  "password": "123456"
}
```

#### 🔹 Verify Email
```http
POST /user/verify
Authorization: Bearer <registration_token>
```

#### 🔹 Login User
```http
POST /user/login
Content-Type: application/json

{
  "email": "jafar@gmail.com",
  "password": "123456"
}
```
**Response includes:** `accessToken`, `refreshToken`, and `user` data.

#### 🔹 Logout User
```http
POST /user/logout
Authorization: Bearer <access_token>
```

#### 🔹 Forgot Password
```http
POST /user/forgot-password
Content-Type: application/json

{
  "email": "jafar@gmail.com"
}
```

#### 🔹 Verify OTP
```http
POST /user/verify-otp/jafar@gmail.com
Content-Type: application/json

{
  "otp": "123456"
}
```

#### 🔹 Change Password
```http
POST /user/change-password/jafar@gmail.com
Content-Type: application/json

{
  "newPassword": "newpass123",
  "confirmPassword": "newpass123"
}
```

---

## 🔐 Authentication Flow

1. **Register** → User created (unverified)
2. **Email Verification** → Token sent to email → Click link → `/user/verify` marks user verified
3. **Login** → Only verified users can log in → Access + Refresh tokens issued
4. **Session** → Old sessions deleted, new session created
5. **Logout** → Session deleted, `isLoggedIn` set to false
6. **Forgot Password** → OTP sent to email → Verify OTP → Change password

---

## 🧪 Testing the API

You can use:
- **Postman** or **Thunder Client**
- **Swagger UI** at `/api-docs`
- **cURL** commands

Example cURL for registration:

```bash
curl -X POST http://localhost:8000/user/register \
  -H "Content-Type: application/json" \
  -d '{"username":"Jafar Ali","email":"jafar@gmail.com","password":"123456"}'
```

---

## 🧩 Environment Variables Reference

| Variable       | Description                          |
| -------------- | ------------------------------------ |
| `PORT`         | Server port (default: 8000)          |
| `MONGO_URI`    | MongoDB connection string            |
| `SECRET_KEY`   | JWT signing secret                   |
| `USER_MAIL`    | Gmail address used to send emails    |
| `USER_PASS`    | Gmail app password                   |
| `FRONTEND_URL` | Frontend URL for CORS & verify link  |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Jafar Ali**

- GitHub: [@your-username](https://github.com/alijafar000)
- Email: alijafarali000@gmail.com

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub — it motivates me to build more!

---

## 🙏 Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/)
