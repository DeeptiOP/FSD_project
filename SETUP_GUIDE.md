# Frontend-Backend Connection Setup Guide

## Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally
- Git (optional)

## Step 1: Start MongoDB

Before running the backend, ensure MongoDB is running on your system:

**Windows (if installed locally):**
```powershell
mongod
```

Or use MongoDB Atlas (Cloud):
- Create a free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get your connection string
- Replace `MONGO_URL` in `server/.env` with your MongoDB Atlas URI

---

## Step 2: Setup Backend

Navigate to the server directory and install dependencies:

```powershell
cd server
npm install
```

The `.env` file is already configured with:
- `MONGO_URL=mongodb://localhost:27017/student-management` (local MongoDB)
- `PORT=5000`

To use MongoDB Atlas instead, update the `.env` file:
```
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/student-management
PORT=5000
```

Start the backend server:

```powershell
npm run dev
```

You should see:
```
Server is running
Mongodb connected successfully
```

---

## Step 3: Setup Frontend

In a new terminal, navigate to the client directory:

```powershell
cd client
npm install
```

The `.env` file is already configured with:
- `REACT_APP_API_URL=http://localhost:5000`

Start the frontend development server:

```powershell
npm run dev
```

The app will open automatically at `http://localhost:3000`

---

## Step 4: Test the Connection

1. Open the Student Registration Form in your browser
2. Fill in the form fields:
   - Full Name
   - Age
   - Course
3. Click "Register Student"
4. You should see a success message: "✓ Student registered successfully!"

---

## API Endpoints

### Backend API (running on http://localhost:5000)

**POST /students** - Create a new student
```json
{
  "name": "John Doe",
  "age": 20,
  "course": "Full Stack Development"
}
```

**GET /students** - Get all students
```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "age": 20,
    "course": "Full Stack Development"
  }
]
```

---

## Troubleshooting

### Backend won't connect to MongoDB
- Check if MongoDB is running
- Verify the `MONGO_URL` in `server/.env`
- For local MongoDB: ensure `mongod` is running
- For MongoDB Atlas: verify username, password, and connection string

### Frontend can't connect to backend
- Verify backend is running on `http://localhost:5000`
- Check `client/.env` has correct `REACT_APP_API_URL`
- Check browser console for CORS errors
- Restart the frontend development server after changing `.env`

### "Port 5000 already in use"
- Change `PORT` in `server/.env` to another port (e.g., 5001)
- Update `REACT_APP_API_URL` in `client/.env` accordingly

---

## Project Structure

```
FSD-frontend-main/
├── client/
│   ├── .env (Frontend environment variables)
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── components/
│   │       ├── StudentForm.js
│   │       └── StudentForm.css
│   └── package.json
├── server/
│   ├── .env (Backend environment variables)
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   └── package.json
└── SETUP_GUIDE.md
```

---

## Next Steps

1. Add a view/list page to display all registered students
2. Add edit and delete functionality
3. Add form validation on frontend
4. Deploy to production (Render, Heroku, Vercel, etc.)
5. Implement user authentication
