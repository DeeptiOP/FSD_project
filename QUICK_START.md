# Quick Start Guide

## Prerequisites
- Node.js installed
- MongoDB running locally (or use MongoDB Atlas)

---

## Method 1: Run Backend and Frontend Separately (Recommended)

### Terminal 1: Start the Backend
```powershell
cd server
npm install  # only first time
npm run dev
```
Expected output:
```
Server is running
Mongodb connected successfully
```

### Terminal 2: Start the Frontend
```powershell
cd client
npm install  # only first time
npm run dev
```
Expected output:
```
Compiled successfully!
You can now view frontend in the browser.
Local:            http://localhost:3000
```

---

## Method 2: MongoDB Connection Options

### Option A: Local MongoDB
1. Install MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Start MongoDB:
```powershell
mongod
```
3. Ensure `server/.env` has:
```
MONGO_URL=mongodb://localhost:27017/student-management
PORT=5000
```

### Option B: MongoDB Atlas (Cloud)
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
4. Update `server/.env`:
```
MONGO_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/student-management
PORT=5000
```

---

## Testing the Connection

1. Navigate to `http://localhost:3000` in your browser
2. You should see:
   - "Guvi Student Management System" heading
   - Student Registration form on the left
   - "Registered Students" section on the right (empty initially)

3. Fill the form and click "Register Student"
4. You should see:
   - Success message: "✓ Student registered successfully!"
   - New student appears in the list on the right

---

## Project File Structure

```
FSD-frontend-main/
├── client/
│   ├── .env                          # Frontend config
│   ├── src/
│   │   ├── App.js                   # Main app component
│   │   ├── App.css                  # App styles
│   │   ├── index.js                 # Entry point
│   │   ├── index.css                # Global styles
│   │   └── components/
│   │       ├── StudentForm.js        # Form component
│   │       ├── StudentForm.css       # Form styles
│   │       ├── StudentList.js        # List component (NEW)
│   │       └── StudentList.css       # List styles (NEW)
│   └── package.json
│
├── server/
│   ├── .env                          # Backend config
│   ├── app.js                        # Express app
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── models/
│   │   └── Student.js               # Student schema
│   ├── routes/
│   │   └── studentRoutes.js         # API routes
│   └── package.json
│
├── SETUP_GUIDE.md                    # Full setup documentation
└── QUICK_START.md                    # This file
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check if MongoDB is running |
| Frontend can't reach backend | Verify `localhost:5000` backend is running |
| "Port already in use" | Change PORT in `server/.env` |
| CORS errors | Ensure `cors` is enabled in `server/app.js` |
| Students not showing | Refresh page or check browser console for errors |

---

## Next Steps

- View `SETUP_GUIDE.md` for detailed documentation
- Add delete student functionality
- Add update student functionality
- Add form validation
- Deploy to production
