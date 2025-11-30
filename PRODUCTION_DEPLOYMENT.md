# Production Deployment Guide

## Overview
This guide covers deploying your Full Stack Student Management System to production using free/affordable services.

---

## Part 1: Backend Deployment (Node.js + MongoDB)

### Option A: Deploy on Render (Recommended - Free Tier)

#### Step 1: Prepare Backend for Production

1. **Update `server/.env` for production:**
```env
# Use MongoDB Atlas (cloud database)
MONGO_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/student-management
PORT=5000
NODE_ENV=production
```

2. **Ensure `server/package.json` has start script:**
```json
"scripts": {
  "dev": "nodemon app.js",
  "start": "node app.js"
}
```

3. **Update `server/app.js` for production:**
```javascript
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
```

#### Step 2: Push to GitHub

1. Initialize git in your project:
```powershell
git init
git add .
git commit -m "Initial commit - Student Management System"
```

2. Create a GitHub repository and push:
```powershell
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Render

1. Go to https://render.com
2. Sign up with GitHub
3. Create a new "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** student-management-api
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `cd server && npm start`
   - **Region:** Choose closest to you

6. Add environment variables:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production

7. Deploy! Your backend will be live at: `https://student-management-api.onrender.com`

---

### Option B: Deploy on Railway

1. Go to https://railway.app
2. Create new project → Deploy from GitHub
3. Select your repository
4. Add environment variables:
   - `MONGO_URL`: MongoDB Atlas URL
   - `NODE_ENV`: production
5. Railway automatically uses `npm start` from package.json

Backend URL: `https://your-app.railway.app`

---

## Part 2: Frontend Deployment (React)

### Option A: Deploy on Vercel (Recommended)

#### Step 1: Prepare Frontend

1. **Update `client/.env.production`:**
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

2. **Build frontend locally to test:**
```powershell
cd client
npm run build
```

This creates an optimized `build/` folder.

#### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework:** Create React App
   - **Root Directory:** `./client`

6. Add environment variables:
   - `REACT_APP_API_URL`: Your Render backend URL

7. Deploy! Your frontend will be live at: `https://your-app.vercel.app`

---

### Option B: Deploy on Netlify

1. Go to https://netlify.com
2. Connect your GitHub repository
3. Configure:
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `build`

4. Add environment variables:
   - `REACT_APP_API_URL`: Your backend URL

---

## Part 3: MongoDB Atlas Setup (Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create account (free)
3. Create a cluster (free tier available)
4. Get connection string
5. Replace username/password in connection string
6. Use in `server/.env`:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/student-management
```

---

## Part 4: CORS Configuration for Production

Update `server/app.js`:

```javascript
const cors = require('cors');

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-frontend-url.vercel.app'
    : 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

---

## Complete Production Setup Checklist

### Backend (Render/Railway)
- [ ] MongoDB Atlas cluster created
- [ ] Connection string in `.env`
- [ ] Code pushed to GitHub
- [ ] `npm start` script working
- [ ] Environment variables configured on hosting platform
- [ ] CORS configured for frontend URL
- [ ] Backend deployed and running
- [ ] Test API endpoints: `https://your-backend/students`

### Frontend (Vercel/Netlify)
- [ ] `npm run build` produces valid build
- [ ] Backend URL in `.env.production`
- [ ] Code pushed to GitHub
- [ ] Environment variables configured
- [ ] Frontend deployed
- [ ] Test in browser
- [ ] Check Console for errors

---

## Testing Production

1. Visit your frontend URL: `https://your-app.vercel.app`
2. Fill in the student form
3. Click "Register Student"
4. Verify student appears in the list
5. Check browser console for errors
6. If issues, check:
   - Backend logs on Render/Railway
   - Frontend console errors
   - Network tab in DevTools
   - CORS settings

---

## Environment Variables Summary

### Backend (`server/.env`)
```env
MONGO_URL=mongodb+srv://user:password@cluster.mongodb.net/student-management
PORT=5000
NODE_ENV=production
```

### Frontend (`client/.env.production`)
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

---

## Production URLs After Deployment

- **Backend API:** `https://your-backend.onrender.com`
- **Frontend:** `https://your-app.vercel.app`

Both will be publicly accessible!

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| CORS errors | Update CORS origin in backend to match frontend URL |
| 404 on API calls | Verify backend URL in frontend `.env.production` |
| Database connection fails | Check MongoDB Atlas whitelist allows all IPs |
| Build fails on Vercel | Ensure `client/` folder has `package.json` |
| Environmental variables not working | Restart deployment after adding variables |

---

## Estimated Costs

- **Render (Backend):** Free tier (limited), $7/month for production
- **Vercel (Frontend):** Free tier for hobby projects
- **MongoDB Atlas:** Free tier (512MB storage)
- **Total Monthly:** ~$7-10 for small project

---

## Next Steps

1. Set up MongoDB Atlas account
2. Create GitHub repository and push code
3. Deploy backend on Render
4. Deploy frontend on Vercel
5. Test production application
6. Monitor logs and performance
