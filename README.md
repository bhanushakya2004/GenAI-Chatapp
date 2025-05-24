# MERN Chat App with Gemini AI Integration 🤖💬

A full-stack real-time chat application built with the **MERN** stack (MongoDB, Express, React, Node.js), enhanced with:

- 🔐 **JWT Authentication**
- ⚡ **Socket.IO** for real-time communication
- 🧠 **Gemini AI** integration for chatbot interaction
- 🔁 **Redis** for session management & scalability

---

## 🚀 Features

- 🔐 **Secure Authentication** using JWT
- 🧑‍🤝‍🧑 **1:1 and Group Chats**
- ⚡ **Real-time Messaging** with Socket.IO
- 🧠 **AI Chatbot Assistant** using Google's Gemini API
- 🗃️ **Persistent Storage** with MongoDB
- 🚀 **Efficient Session Management** with Redis

---

## 🛠️ Tech Stack

### Frontend
- React.js (with Hooks)
- TailwindCSS / Styled Components (if used)
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for Authentication
- Redis for Session Storage
- Socket.IO Server
- Gemini AI API

---


## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhanushakya2004/mern-chatapp.git
cd mern-chatapp

2. Setup Backend

cd server
npm install
touch .env  # Add your environment variables
npm start
3. Setup Frontend

cd client
npm install
npm start
📦 .env Configuration

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:3000
🧠 Gemini AI Chatbot
The chatbot responds to user messages tagged with @ai. You can ask it questions directly in the chat:


@ai hello
@ai tell me a joke
📸 UI Preview
The app includes a message "like" system:


✅ To-Do / Upcoming Features
 File sharing

 Push notifications

 Typing indicators

 Admin dashboard

🧑‍💻 Author
Built with ❤️ by Bhanu Shakya

📄 License
MIT License

