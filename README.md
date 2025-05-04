# 🐾 Virtual Pet Adoption Center

Welcome to the **Virtual Pet Adoption Center**! This is a full-stack web application where users can browse available pets, submit adoption requests, and manage pet listings via an admin dashboard.

---

## 🚀 Features

- 🐶 View a list of adorable pets available for adoption
- 📥 Submit adoption requests with adopter details
- 🛠️ Admin panel to manage pets and adoption requests
- 🧾 Generate downloadable PDF adoption certificates
- 🔧 Full CRUD operations for pets

---

## 🛠️ Technologies Used

### 🎨 Frontend

- **React.js** – Core UI library
- **Tailwind CSS** – Utility-first CSS framework
- **React Router DOM** – Routing
- **Redux Toolkit** – State and theme management
- **Formik + Yup** – Form handling and validation
- **Axios** – API requests


### ⚙️ Backend

- **Node.js** – JavaScript runtime
- **Express.js** – Server and REST API framework
- **MongoDB** – NoSQL database (MongoDB Atlas)
- **Mongoose** – MongoDB ODM
- **dotenv** – Environment variable configuration
- **Postman** – API documentation

---

## 📁 Project Structure

pet-adoption/
├── backend/ # Node.js/Express backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── uploads/ # Uploaded pet images
│ └── server.js
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ └── .env
├── README.md

---

## 📦 Installation & Setup

### 1. Clone the Repository
  git clone https://github.com/Vithushan126/pet_adoption.git
  cd pet_adoption

⚙️ Backend Setup
2. Create Environment File
Create a config.env file inside pet-adoption/backend/config/
  PORT=8000
  MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/pet-adoption_db
Replace <username> and <password>,clustor,create the data base with your actual MongoDB Atlas credentials.
Make sure your IP is whitelisted and your cluster is accessible.

3. Install Backend Dependencie
  cd backend
  npm install

5. Run the Backend Server
  npm run dev
  Backend will be running on: http://localhost:8000/api/v1

🎨 Frontend Setup
5. Create Environment File
Create a .env file inside pet-adoption/frontend/
  VITE_BASE_URL=http://localhost:8000/api/v1
  
6. Install Frontend Dependencies
  cd ../frontend
  npm install

8. Run the Frontend
  npm run dev
  Frontend will be running at: http://localhost:5173

🌐 API Documentation
Full API reference is available via Postman:
📄 View Postman API Docs
    https://documenter.getpostman.com/view/29865887/2sB2j68V75

📬 Contact
For questions or contributions:
  GitHub: https://github.com/Vithushan126
  Email: vithushan126@gmail.com
