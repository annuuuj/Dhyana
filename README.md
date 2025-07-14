# 🌿 Dhyana - Your Journey to Mental Wellness

**Dhyana** is a powerful and compassionate mental wellness platform built with the modern **MERN Stack (MongoDB, Express.js, React, Node.js)**. It empowers individuals to reflect, heal, and grow—offering secure journaling, AI-powered support, and personal insights in an elegant, intuitive interface.

---

## ✨ Features

### 🔐 Secure User Authentication

* Register and log in with confidence.
* Authentication is powered by **JWT tokens**, securely stored in MongoDB.

### 📔 Personalized Journaling

* Thoughtfully designed "Journal" section for writing feelings, experiences, and reflections.
* Optional prompts help guide users in self-expression.
* Entries are **private** and safely stored in **MongoDB**.

### 🤖 AI-Powered Support (AI Search)

* Smart chatbot responds to queries with:

  * 📚 Book suggestions
  * 📝 Blog links
  * 📺 YouTube videos
  * 👩‍⚕️ Mental health specialist roles
* Seamlessly integrated using the **Gemini API**.

### 🧠 Talk to Us Form

* Submit your thoughts or struggles directly.
* Our system connects users with appropriate support channels.

### 🏡 Visually Appealing & Responsive Home Page

* Designed to welcome users and communicate the purpose of the platform with warmth and clarity.
* Works beautifully across all devices using **media queries** and **CSS transitions**.

---

## 🚀 Tech Stack

### Frontend

* **React**: SPA architecture with reusable components
* **React Router DOM**: For smooth routing
* **Lucide React**: Icon library for clean, modern visuals
* **CSS (custom)**: For animations, transitions, and full responsiveness

### Backend

* **Node.js** + **Express.js**: RESTful API server
* **MongoDB** + **Mongoose**: NoSQL database + schema modeling
* **bcryptjs**: Password hashing
* **jsonwebtoken (JWT)**: Secure token-based authentication
* **axios**: For client-server communication

---

## 🎨 Styling & Design

### 🌱 Calming Visual Identity

* **Color Palette**: Light greens, mint, and soft neutrals for peace and clarity
* **Typography**: Clean sans-serif fonts for calm readability
* **Transitions**: Smooth animations for input fields, buttons, and sections
* **Responsive Design**: Adapts beautifully to mobile, tablet, and desktop

---

## 📸 Screenshots
Here are some glimpses of the Dhyana Mental Wellness Platform in action:



* 🏠 **Home Page** – Warm welcome and overview of services
* <img width="1920" height="975" alt="Screenshot (59)" src="https://github.com/user-attachments/assets/0b7e37c4-6255-4524-bdac-3f37f5173d53" />

* 📓 **Journal Page** – Thoughtful interface for writing and reviewing entries
* <img width="1920" height="995" alt="Screenshot (60)" src="https://github.com/user-attachments/assets/44022457-77f6-4d88-bb46-b6beb2cadf9f" />

* 🤖 **AI Search** – Interactive chatbot delivering smart recommendations
* <img width="1920" height="1037" alt="Screenshot (62)" src="https://github.com/user-attachments/assets/d33611fe-5b51-414a-996f-df5642e982e7" />

* 🔐 **Login/Register** – Secure user onboarding
*  <img width="1920" height="1002" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/676cb9f5-ee33-4bae-8149-ef344683daf5" />
* 💬 **Talk to Us** – Direct connection with support options

---

## 📦 Installation Guide

```bash
# Clone the repo
$ git clone <repository-url>
$ cd dhyana-platform

# Backend Setup
$ cd backend
$ npm install

# Create .env file
$ touch .env
```

**Add the following to `.env`:**

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

```bash
# Start backend server
$ npm run dev

# Frontend Setup
$ cd ../frontend
$ npm install

# Start frontend dev server
$ npm run dev
```

Visit `http://localhost:5173` to view the app.

---

## 💡 Usage

* ✍️ **Journaling** – Safely record thoughts in the Journal
* 🧠 **AI Search** – Ask anything, get instant resources
* 🗣️ **Talk to Us** – Reach out directly for help
* 🔐 **Login/Register** – Get access to personal features

---

## 🤝 Contributing

We're open to ideas and collaborations! 🛠️

* Open an issue or feature request
* Fork the repo and submit a PR

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

> 🌿 *Dhyana is your digital sanctuary for mental clarity, emotional strength, and peaceful growth.*
