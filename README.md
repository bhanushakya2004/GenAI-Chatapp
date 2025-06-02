
# MERN Chat App with Gemini AI Integration 🤖💬

A full-stack real-time chat application built with the **MERN** stack (MongoDB, Express, React, Node.js), enhanced with:

* 🔐 **JWT Authentication**
* ⚡ **Socket.IO** for real-time communication
* 🧠 **Gemini AI** integration for chatbot interaction
* 🔁 **Redis** for session management & scalability
* 🧩 **LangChain** tools for intelligent prompt management and short-term memory

---

## 🚀 Features

* 🔐 **Secure Authentication** using JWT
* 🧑‍🤝‍🧑 **1:1 and Group Chats**
* ⚡ **Real-time Messaging** with Socket.IO
* 🧠 **AI Chatbot Assistant** powered by **Google's Gemini API**
* 🧠 **LangChain Memory**: The bot remembers last 5 user prompts for smart replies
* 🧩 **Prompt Engineering** using LangChain Templates for structured, high-quality outputs
* 🗃️ **Persistent Storage** with MongoDB
* 🚀 **Efficient Session Management** with Redis

---

## 🛠️ Tech Stack

### Frontend

* React.js (with Hooks)
* TailwindCSS / Styled Components (if used)
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT for Authentication
* Redis for Session Storage
* Socket.IO Server
* **Gemini AI API** via Google Generative AI SDK
* **LangChain** (PromptTemplate, Memory, RunnableChain, ChatGoogleGenerativeAI)

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhanushakya2004/mern-chatapp.git
cd mern-chatapp
```

### 2. Setup Backend

```bash
cd server
npm install
touch .env  # Add your environment variables
npm start
```

### 3. Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 📦 .env Configuration

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:3000
```

---

## 🧠 Gemini AI Chatbot (Powered by LangChain)

The chatbot responds to user messages tagged with `@ai`. You can interact naturally, and it uses **LangChain's short-term memory** (last 5 turns) to maintain context:

```txt
@ai hello
@ai give me a joke
@ai now make it a pun version
```

✅ The chatbot:

* Handles structured prompts
* Remembers your past 5 interactions (LangChain BufferMemory)
* Replies intelligently using Gemini 1.5 Flash via LangChain
* Uses prompt templates and a Runnable chain for modularity

---

## 📸 UI Preview

The app includes:

* 1:1 and group chat support
* Message like system
* Real-time updates

---

## ✅ To-Do / Upcoming Features

* 📁 File sharing
* 🔔 Push notifications
* ✍️ Typing indicators
* 🛠️ Admin dashboard
* 🧠 Long-term memory with LangChain or Redis vector store (optional)

---

## 🧑‍💻 Author

Built with ❤️ by **Bhanu Shakya**

---

## 📄 License

[MIT License](LICENSE)

---
