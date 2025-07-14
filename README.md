Dhyana - Your Journey to Mental Wellness
Dhyana is a comprehensive mental wellness platform designed to empower users on their path to better mental health. Built with a modern MERN (MongoDB, Express.js, React, Node.js) stack, Dhyana offers a secure and intuitive environment for self-reflection, AI-powered support, and personalized insights.

✨ Features
User Authentication (Secure & Unique JWT Token):

Users can securely register and log in to the platform.

Authentication is managed using unique JWT (JSON Web Token) tokens stored in MongoDB, ensuring secure access to personalized features.

Personalized Journaling Section:

A dedicated "Journal" section allows users to write about their thoughts, feelings, and daily experiences.

The platform provides prompts or suggestions to guide users in their journaling, helping them articulate their emotions and track their mental well-being over time.

Journal entries are securely stored in MongoDB, accessible only to the authenticated user.

AI Chatbot for Queries (AI Search):

An "AI Search" feature provides users with an intelligent chatbot for mental health-related queries.

The chatbot offers resources, suggestions (e.g., book recommendations, blog links, YouTube videos), and information on different mental health specialist roles, acting as a helpful first point of contact for support.

"Talk To Us" Form:

A dedicated section for users to reach out for more personalized support, sharing their feelings, problems, and preferences for connecting with specialists.

Attractive Home Page:

A welcoming and visually appealing home page designed to introduce users to the platform's mission and benefits.

Responsive Design:

The entire platform is built with responsiveness in mind, ensuring a seamless and optimal user experience across various devices (desktops, tablets, and mobile phones) using media queries.

Smooth Transitions & UI:

The user interface is designed to be intuitive and engaging, featuring smooth CSS transitions and animations for a fluid user experience.

🚀 Technologies Used
Frontend:

React: For building dynamic and interactive user interfaces.

React Router DOM: For seamless navigation between different sections of the application.

Lucide React: For crisp and modern icons across the UI.

Plain CSS: Custom CSS for comprehensive styling, responsiveness, and transitions, ensuring a unique and attractive visual identity.

Backend:

Node.js: A JavaScript runtime for building scalable server-side applications.

Express.js: A fast, unopinionated, minimalist web framework for Node.js, used for API development.

MongoDB: A NoSQL database used for storing user data, journal entries, and other application-specific information.

Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying database interactions.

bcryptjs: For secure password hashing.

jsonwebtoken (JWT): For implementing token-based authentication.

axios: For making HTTP requests from the frontend to the backend.

🎨 Styling & Visuals
Dhyana's UI is crafted to be calming, professional, and user-friendly, with a focus on a light green color palette to evoke a sense of mental tranquility and growth.

Color Palette: Predominantly features shades of light green, mint, and white, complemented by darker tones for text and subtle accents, creating a harmonious and refreshing visual experience.

Typography: Utilizes clean and modern fonts for excellent readability and a polished appearance.

Transitions & Animations: Subtle CSS transitions are applied to interactive elements, buttons, and page changes, enhancing the user experience with smooth visual feedback.

Media Queries: Ensures that the layout and elements adapt perfectly to different screen sizes, providing an optimal view on any device.

📸 Screenshots
Here are some glimpses of the Dhyana Mental Wellness Platform in action:

Home Page
The welcoming landing page, highlighting the platform's mission for mental wellness.
<img width="1920" height="975" alt="Screenshot (59)" src="https://github.com/user-attachments/assets/8d33b4e8-d0ba-4422-9190-933a1e687b6e" />


Mental Wellness Journal
Track your journey to better mental health by writing and reviewing your journal entries.
<img width="1920" height="995" alt="Screenshot (60)" src="https://github.com/user-attachments/assets/478bf8dd-95ae-4387-bdf4-6e70e6bbe2ce" />


AI Search / Chatbot
Get instant support and resources from our AI chatbot for your mental health queries.
<img width="1920" height="1037" alt="Screenshot (62)" src="https://github.com/user-attachments/assets/cd60cc8d-db95-450f-94bf-30dd93ab9deb" />


Login/Register Page
Securely sign in or create a new account to access personalized features.
<img width="1920" height="1002" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/82b3ed88-4f92-4b29-b869-c24557c3a24f" />


Common Mental Health Issues
An informational section highlighting common mental health issues and how Dhyana can help.
<img width="1920" height="1080" alt="Screenshot (65)" src="https://github.com/user-attachments/assets/eef8cba5-05fe-472a-b5c1-51ebc3931bd4" />


📦 Installation
To get Dhyana up and running on your local machine, follow these steps:

Clone the repository:

git clone <repository-url>
cd dhyana-platform

Navigate to the server directory and install dependencies:

cd server
npm install

Create a .env file in the server directory with your MongoDB URI and JWT Secret:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key

Start the backend server:

npm start # or nodemon server.js

Open a new terminal, navigate to the client directory, and install dependencies:

cd ../client
npm install

Start the frontend development server:

npm start

This will open the application in your browser at http://localhost:3000 (or another available port, typically 5173 if using Vite).

💡 Usage
Register/Login: Create an account or log in to access personalized features.

Journaling: Navigate to the "Journal" section to write down your thoughts and track your emotional journey.

AI Search: Use the "AI Search" feature to ask questions about mental health and get instant, helpful resources.

Explore: Browse other sections like "Home," "About Us," and "Talk To Us" to learn more and connect with support.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

📄 License
This project is open-source and available under the MIT License.
