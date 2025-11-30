# Render Deployment Fix Guide

## Issue
Render is looking for `package.json` in the wrong directory (`/opt/render/project/src/`) instead of `/opt/render/project/server/`.

## Root Cause
The existing Web Service on Render was created **before** the `render.yaml` file was added to your repo. Render doesn't automatically re-read `render.yaml` for existing services.

## Solution: Delete and Redeploy

### Step 1: Delete the Old Service on Render
1. Go to https://dashboard.render.com
2. Find your `fsd-student-api` service
3. Click "Settings" (bottom of page)
4. Scroll to "Delete Service"
5. Click "Delete"
6. Confirm deletion

### Step 2: Create a New Web Service
1. Go back to your Render dashboard
2. Click "New +" → "Web Service"
3. Select your GitHub repository: `FSD_project`
4. Click "Connect"

### Step 3: Render Will Detect render.yaml
When Render scans your repo, it will automatically detect `render.yaml` and say something like:
```
"Detected a render.yaml file in your repository"
```

**If it does:** Click "Continue" and skip to Step 5.

**If it doesn't:** Fill in manually (see below).

### Step 4: Manual Configuration (if needed)
If no `render.yaml` is detected, fill in:

| Field | Value |
|-------|-------|
| **Name** | `fsd-student-api` |
| **Environment** | `Node` |
| **Build Command** | `./build.sh` |
| **Start Command** | `cd server && npm start` |
| **Region** | Choose closest to you |
| **Plan** | `Free` tier |

### Step 5: Add Environment Variables
Before deploying, add these variables:

| Key | Value |
|-----|-------|
| `MONGO_URL` | Your MongoDB Atlas connection string |
| `FRONTEND_URL` | `https://fsd-student-management.vercel.app` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |

### Step 6: Deploy
Click "Create Web Service" and wait for it to complete (~5-10 minutes).

---

## Verification

### Check Deployment Status
1. Go to your Render dashboard
2. Open the `fsd-student-api` service
3. Look at the "Events" tab
4. You should see:
   - ✅ Build started
   - ✅ Installing dependencies
   - ✅ Build successful
   - ✅ Server started

### Test the Backend
Once it says "Live", test with:
```bash
curl https://fsd-student-api.onrender.com/
```

Should return:
```json
{"message":"Student Management API is running"}
```

---

## Why This Happened

1. You initially created a Web Service manually on Render (before `render.yaml` existed)
2. Render cached that configuration
3. Later, `render.yaml` was added to your repo, but Render didn't use it for the existing service
4. When you pushed code, Render still used the old configuration (looking in wrong folder)

---

## What render.yaml Does

The `render.yaml` file tells Render:
- Root directory is `server/`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables structure

This way, Render knows to run `npm install` from inside the `server/` folder instead of the root.

---

## File: build.sh

The `build.sh` script is a fallback. It explicitly changes to the `server/` directory and runs `npm install`. This ensures Render installs dependencies in the correct folder even if `render.yaml` isn't detected.

---

## Next Steps

1. ✅ Delete old service on Render
2. ✅ Create new Web Service (it will detect `render.yaml`)
3. ✅ Add environment variables
4. ✅ Deploy
5. ✅ Update Vercel with your new backend URL
