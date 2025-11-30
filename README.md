# 📚 Student Management System

A full-stack web application for managing student registrations with real-time data persistence. Built with **React** (frontend), **Express.js** (backend), and **MongoDB** (database).

## 🎯 Live Demo

- **Frontend:** https://fsd-student-management.vercel.app
- **Backend API:** https://fsd-project-1-diqe.onrender.com
- **API Docs:** https://fsd-project-1-diqe.onrender.com/students

---

## ✨ Features

- ✅ **Student Registration Form** - Register students with name, age, and course
- ✅ **Real-time Student List** - View all registered students instantly
- ✅ **Beautiful UI** - Modern gradient design with smooth animations
- ✅ **Success/Error Messages** - User feedback with status notifications
- ✅ **MongoDB Integration** - Persistent data storage
- ✅ **Auto-Deploy** - CI/CD pipeline for automatic deployments
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **Production Ready** - Deployed on Vercel & Render

---

## 🏗️ Tech Stack

### Frontend
- **React 19** - UI framework
- **CSS3** - Styling with gradients and animations
- **Vercel** - Deployment platform

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Render** - Deployment platform

### Database
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB

### DevOps
- **GitHub** - Version control
- **GitHub Actions** - CI/CD pipeline
- **Git** - Source code management

---

## 📁 Project Structure

```
FSD_project/
├── client/                          # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js                  # Main app component
│   │   ├── App.css                 # App styles
│   │   ├── index.js                # Entry point
│   │   └── components/
│   │       ├── StudentForm.js       # Registration form
│   │       ├── StudentForm.css      # Form styles
│   │       ├── StudentList.js       # Student list display
│   │       └── StudentList.css      # List styles
│   ├── package.json
│   └── .env.production             # Production env variables
│
├── server/                          # Express Backend
│   ├── app.js                       # Express app setup
│   ├── config/
│   │   └── db.js                   # MongoDB connection
│   ├── models/
│   │   └── Student.js              # Student schema
│   ├── routes/
│   │   └── studentRoutes.js        # API routes
│   ├── package.json
│   └── .env.production             # Production env variables
│
├── .github/
│   └── workflows/
│       └── ci.yml                  # GitHub Actions CI/CD
│
├── render.yaml                      # Render deployment config
├── Procfile                         # Process file for Render
├── build.sh                         # Build script
├── README.md                        # This file
└── VERCEL_RENDER_SETUP.md          # Deployment guide

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Local Development

#### 1. Clone the Repository
```bash
git clone https://github.com/DeeptiOP/FSD_project.git
cd FSD_project
```

#### 2. Backend Setup
```bash
cd server
npm install
```

Create `.env` file in `server/` folder:
```env
MONGO_URL=mongodb://localhost:27017/student-management
PORT=5000
NODE_ENV=development
```

Start backend:
```bash
npm run dev
```

Backend runs on `http://localhost:5000`

#### 3. Frontend Setup
Open a new terminal and navigate to the project:
```bash
cd client
npm install
```

Create `.env` file in `client/` folder:
```env
REACT_APP_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Frontend runs on `http://localhost:3000`

#### 4. Test
1. Open browser: http://localhost:3000
2. Fill in the student registration form
3. Click "Register Student"
4. See the student appear in the list

---

## 🌐 Production Deployment

### Frontend (Vercel)
1. Go to https://vercel.com
2. Import this GitHub repository
3. Set Root Directory to `./client`
4. Add environment variable: `REACT_APP_API_URL` with backend URL
5. Deploy

**Live URL:** https://fsd-student-management.vercel.app

### Backend (Render)
1. Go to https://render.com
2. Import this GitHub repository
3. Render will auto-detect `render.yaml` configuration
4. Add environment variables:
   - `MONGO_URL`: MongoDB Atlas connection string
   - `FRONTEND_URL`: Your Vercel app URL
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
5. Deploy

**Live URL:** https://fsd-project-1-diqe.onrender.com

### Database (MongoDB Atlas)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free M0 cluster
3. Get connection string
4. Use in Render environment variables

---

## 📡 API Endpoints

### GET /
Returns API status
```
GET https://fsd-project-1-diqe.onrender.com/
Response: {"message":"Student Management API is running"}
```

### GET /students
Fetch all registered students
```
GET https://fsd-project-1-diqe.onrender.com/students
Response: [
  {
    "_id": "...",
    "name": "John Doe",
    "age": 20,
    "course": "Full Stack Development"
  }
]
```

### POST /students
Register a new student
```
POST https://fsd-project-1-diqe.onrender.com/students
Content-Type: application/json

Request Body:
{
  "name": "Jane Smith",
  "age": 21,
  "course": "Web Development"
}

Response: {
  "_id": "...",
  "name": "Jane Smith",
  "age": 21,
  "course": "Web Development"
}
```

---

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for automated CI/CD:

- **Trigger:** Every push to `main` branch
- **Build:** Builds frontend and backend
- **Deploy:** Vercel deploys frontend, Render deploys backend automatically

Workflow file: `.github/workflows/ci.yml`

---

## 📚 Documentation

- **Deployment Guide:** [VERCEL_RENDER_SETUP.md](./VERCEL_RENDER_SETUP.md)
- **Render Manual Fix:** [RENDER_MANUAL_FIX.md](./RENDER_MANUAL_FIX.md)
- **Production Deployment:** [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md)

---

## 🛠️ Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run test     # Run tests
```

### Backend
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
npm run test     # Run tests
```

---

## 🎨 UI Features

### Modern Design
- Purple gradient background
- Smooth fade-in animations
- Card-based layout
- Hover effects and transitions

### Form Features
- Real-time validation
- Labeled input fields
- Success/error notifications
- Auto-clear on successful submission

### List Features
- Beautiful student cards
- Scrollable list with custom scrollbar
- Responsive grid layout
- Gradient headers

---

## 🔐 Environment Variables

### Backend (.env / .env.production)
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/student-management
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://fsd-student-management.vercel.app
```

### Frontend (.env / .env.production)
```env
REACT_APP_API_URL=https://fsd-project-1-diqe.onrender.com
```

---

## 📊 Deployment Status

| Service | Status | URL |
|---------|--------|-----|
| Frontend | ✅ Live | https://fsd-student-management.vercel.app |
| Backend | ✅ Live | https://fsd-project-1-diqe.onrender.com |
| Database | ✅ Live | MongoDB Atlas (internal) |
| CI/CD | ✅ Enabled | GitHub Actions |

---

## 🐛 Troubleshooting

### Frontend Can't Connect to Backend
- Check browser console for CORS errors
- Verify `REACT_APP_API_URL` is correct in Vercel
- Ensure backend is running and accessible
- Redeploy frontend after changing environment variables

### Backend Won't Start
- Verify MongoDB connection string is correct
- Check MongoDB Atlas IP whitelist
- Ensure all dependencies are installed: `npm install`
- Check logs on Render dashboard

### Build Fails
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v18+)
- Verify all required files exist (package.json, etc.)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the ISC License.

---

## 👤 Author

**Deepti OP**
- GitHub: [@DeeptiOP](https://github.com/DeeptiOP)
- Repository: [FSD_project](https://github.com/DeeptiOP/FSD_project)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Deployment](https://vercel.com)
- [Render Hosting](https://render.com)

---

## 📞 Support & Questions

If you have questions or need help:
1. Check the [documentation files](./VERCEL_RENDER_SETUP.md)
2. Review [troubleshooting guide](./RENDER_MANUAL_FIX.md)
3. Open an issue on GitHub

---

## 🎯 Future Enhancements

- [ ] Add student edit functionality
- [ ] Add student delete functionality
- [ ] Implement user authentication
- [ ] Add search and filter features
- [ ] Create admin dashboard
- [ ] Add email notifications
- [ ] Implement data export (CSV/PDF)
- [ ] Add unit and integration tests
- [ ] Set up database backups
- [ ] Implement rate limiting

---

**Made with ❤️ using React, Node.js, and MongoDB**

Last Updated: December 1, 2025
