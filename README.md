# Week-4-Mern-Stack-Assignment
# 📝 MERN Stack Blog Application

This is a full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, read, update, and delete blog posts and categories, and includes an image upload feature for blog post thumbnails.

---

## 🚀 Live Demo

To run this project locally, follow the instructions below.

---

## 📌 Features

- CRUD operations for blog posts and categories
- Image upload for blog posts
- Form validation
- RESTful API
- React Router for navigation
- Optimistic UI updates (delete)
- Error and loading state management
- Fully responsive UI built with Tailwind CSS
- Organized folder structure (client + server)

---

## 🧠 Technologies Used

| Stack        | Tools / Libraries                |
|--------------|----------------------------------|
| Frontend     | React, Vite, Axios, React Router, Tailwind CSS |
| Backend      | Node.js, Express.js, MongoDB, Mongoose, Express Validator |
| Other        | Multer (image upload), dotenv |

---

## 📁 Project Structure

Week-4-Mern-Stack-Assignment/
├── client/ # React front-end
│ ├── pages/ # Components for views (PostList, PostForm, etc.)
│ ├── services/ # API calls
│ ├── App.jsx # Main app with routes
│ ├── main.jsx # Entry point
│ └── vite.config.js # Proxy config
│
├── server/ # Express back-end
│ ├── models.js # Mongoose models (Post, Category)
│ ├── routes.js # API endpoints
│ ├── server.js # Entry point for backend
│ ├── auth.js # JWT auth middleware (optional)
│ ├── errorHandler.js # Error middleware
│ └── uploads/ # Uploaded images
│
├── .env.example # Sample environment variable file
└── README.md # This file

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Lynnviolet/Week-4-Mern-Stack-Assignment.git
cd Week-4-Mern-Stack-Assignment
2. Set Up Environment Variables
📁 server/.env
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_blog
JWT_SECRET=your_jwt_secret_key
📁 client/.env
env
Copy
Edit
VITE_API_URL=http://localhost:5000/api
Rename .env.example to .env in both folders and fill in values.

3. Install Dependencies
🛠️ Server
bash
Copy
Edit
cd server
npm install
🎨 Client
bash
Copy
Edit
cd client
npm install
4. Run the App
🚀 Start Backend
bash
Copy
Edit
cd server
npm run dev
🌐 Start Frontend
bash
Copy
Edit
cd client
npm run dev
The app should now be running at http://localhost:5173/.

📡 API Documentation
📚 Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get a single post
POST	/api/posts	Create a new post
PUT	/api/posts/:id	Update an existing post
DELETE	/api/posts/:id	Delete a post

📁 Categories
Method	Endpoint	Description
GET	/api/categories	Get all categories
POST	/api/categories	Create a new category

🖼️ Image Upload Feature
Users can upload a featured image when creating or editing a post.

Image is uploaded via multer and saved in the uploads/ directory.

Images are served statically from:
http://localhost:5000/uploads/<filename>

🖼️ Screenshots
(Optional: Add screenshots from PostList, Create Post, or image preview UI here)

✅ Completed Tasks
Task	Status
Task 1: Project Setup	✅ Completed
Task 2: Backend API	✅ Completed
Task 3: Frontend Components	✅ Completed
Task 4: Integration & Data Flow	✅ Completed
Task 5: Advanced Feature (Image Upload)	✅ Completed

👩‍💻 Author
Lynn Violet Wanjiru Kimotho
💻 GitHub: Lynnviolet
📧 Email: shikkslynn@gmail.com

