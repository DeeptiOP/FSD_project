# GitHub → Vercel & Render Auto-Deployment Setup

## Part 1: Deploy Frontend to Vercel

### Step 1: Sign in to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub repos

### Step 2: Create a New Project
1. After signing in, click "New Project"
2. In the "Import Git Repository" section, find `FSD_project`
3. Click "Import"

### Step 3: Configure Frontend Deployment
You'll see a configuration page. Fill in:

**Project Name:**
```
fsd-student-management
```

**Framework Preset:**
```
Create React App
```

**Root Directory:**
```
./client
```

**Build Command:**
```
npm run build
```

**Output Directory:**
```
build
```

**Install Command:**
```
npm install
```

### Step 4: Add Environment Variables
Click "Environment Variables" and add:

| Name | Value |
|------|-------|
| `REACT_APP_API_URL` | `https://your-backend.onrender.com` |

**⚠️ Important:** Replace `https://your-backend.onrender.com` with your actual Render backend URL (you'll get this in Part 2).

### Step 5: Deploy
1. Click "Deploy"
2. Vercel will build and deploy your frontend
3. Wait ~3–5 minutes
4. You'll get a live URL: `https://fsd-student-management.vercel.app` (or similar)

**✅ After deployment:**
- Visit your Vercel URL
- Make sure it loads without errors
- Note the URL for the next step

### Auto-Redeploy (Already Enabled)
- Every push to `main` on GitHub will automatically trigger a rebuild and deploy on Vercel
- Check the "Deployments" tab in Vercel dashboard to see build history

---

## Part 2: Deploy Backend to Render

### Step 1: Sign in to Render
1. Go to https://render.com
2. Click "Sign Up" → Choose "GitHub"
3. Authorize Render to access your GitHub repos

### Step 2: Create a New Web Service
1. After signing in, click "New +" → "Web Service"
2. Find and select your `FSD_project` repository
3. Click "Connect"

### Step 3: Configure Backend Deployment
Fill in the deployment form:

| Field | Value |
|-------|-------|
| **Name** | `fsd-student-api` |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `cd server && npm start` |
| **Region** | Choose closest to you |
| **Plan** | `Free` (or `Starter` for production) |

### Step 4: Add Environment Variables
Click "Advanced" → "Add Environment Variable":

| Key | Value |
|-----|-------|
| `MONGO_URL` | Your MongoDB Atlas connection string (see below) |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-frontend.vercel.app` |
| `PORT` | `5000` |

**Where to get `MONGO_URL`:**
1. Go to https://www.mongodb.com/cloud/atlas
2. Log in and open your cluster
3. Click "Connect"
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<username>` and `<password>` with your database credentials
7. Paste into Render

**Update `FRONTEND_URL`:** Use the Vercel URL from Part 1 (e.g., `https://fsd-student-management.vercel.app`)

### Step 5: Deploy Backend
1. Click "Create Web Service"
2. Render will build and deploy your backend
3. Wait ~2–3 minutes for it to start
4. Look for "Live" status (green)
5. Your backend URL will be shown (e.g., `https://fsd-student-api.onrender.com`)

**✅ After deployment:**
- Test the backend: `curl https://fsd-student-api.onrender.com/`
- Should return: `{"message":"Student Management API is running"}`

### Auto-Redeploy (Already Enabled)
- Every push to `main` on GitHub triggers a rebuild and deploy on Render
- Check the "Events" log in Render dashboard

---

## Part 3: Update Vercel with Backend URL

Now that your backend is live, update the frontend environment variable:

### Step 1: Go to Vercel Dashboard
1. Navigate to https://vercel.com/dashboard
2. Select your `fsd-student-management` project
3. Click "Settings" → "Environment Variables"

### Step 2: Update Backend URL
1. Find `REACT_APP_API_URL`
2. Edit it and set the value to: `https://fsd-student-api.onrender.com` (your actual Render URL)
3. Click "Save"

### Step 3: Redeploy Frontend
1. Go to "Deployments"
2. Find the latest deployment
3. Click the "..." menu → "Redeploy"
4. Wait ~2–3 minutes

**✅ Now test:**
1. Open your Vercel frontend URL
2. Fill the student form
3. Click "Register Student"
4. The data should save to MongoDB and appear in the list

---

## Summary: Your Production URLs

| Service | URL |
|---------|-----|
| Frontend | `https://fsd-student-management.vercel.app` |
| Backend | `https://fsd-student-api.onrender.com` |
| API Endpoint | `https://fsd-student-api.onrender.com/students` |
| Database | MongoDB Atlas (internal) |

---

## Troubleshooting

### Issue: Frontend shows "Cannot connect to backend"
**Solution:** 
- Check browser DevTools → Console for errors
- Verify `REACT_APP_API_URL` in Vercel is correct
- Ensure backend is running (check Render dashboard)
- Redeploy frontend to apply environment changes

### Issue: Backend won't deploy
**Solution:**
- Check Render build logs for errors
- Verify MongoDB Atlas connection string is correct
- Ensure `MONGO_URL` is set in Render environment variables
- Check firewall/IP whitelist on MongoDB Atlas

### Issue: Data not persisting
**Solution:**
- Test MongoDB connection directly
- Check Render logs for database errors
- Verify MongoDB Atlas cluster is running

### Issue: 502 Bad Gateway on Vercel
**Solution:**
- Wait a few minutes (deployment still in progress)
- Check Vercel build logs
- Redeploy the project

---

## How It Works Now

1. **You push code to GitHub** → Both Vercel and Render automatically detect the push
2. **Vercel rebuilds frontend** → Runs `npm run build` in `client/` folder
3. **Render rebuilds backend** → Runs `npm install` and starts `cd server && npm start`
4. **Both deploy simultaneously** → New code is live within 3–5 minutes
5. **No manual steps needed** → Just push and wait

---

## Next Steps (Optional)

- Add a custom domain to Vercel (Settings → Domains)
- Set up monitoring alerts
- Add more API endpoints (delete, update students)
- Implement user authentication
- Add tests and expand CI/CD pipeline

---

## Quick Reference: Setting Environment Variables

### On Vercel:
- Dashboard → Project → Settings → Environment Variables
- Add `REACT_APP_API_URL` with your backend URL
- Redeploy to apply changes

### On Render:
- Dashboard → Service → Environment
- Add `MONGO_URL`, `NODE_ENV`, `FRONTEND_URL`, `PORT`
- Auto-redeploys (or manually trigger)

---

## Support Links

- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
