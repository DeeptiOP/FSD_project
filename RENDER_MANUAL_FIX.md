# Definitive Render Fix - Manual Dashboard Configuration

## The Root Problem
Render's **Web Service dashboard is overriding `render.yaml`** settings. Even though `render.yaml` specifies `rootDir: server`, the dashboard UI is forcing it to look for `package.json` in `/opt/render/project/src/`.

## The Solution: Manual Configuration in Render Dashboard

### Step 1: Go to Your Service Settings
1. Open https://dashboard.render.com
2. Click on your `fsd-student-api` service
3. Click **"Settings"** in the left sidebar

### Step 2: Update Build & Start Commands
Look for these fields and **update them exactly as shown:**

| Setting | Value |
|---------|-------|
| **Build Command** | `cd server && npm install` |
| **Start Command** | `cd server && npm start` |

**Why this works:** By adding `cd server &&` before each command, we explicitly navigate to the server folder first, bypassing Render's directory confusion.

### Step 3: Verify Root Directory
- **Do NOT set a Root Directory** if you see that field
- Or if you must, set it to just `.` (current directory)
- The `cd server &&` in the commands handles the navigation

### Step 4: Update Environment Variables
Make sure these are set:

| Key | Value |
|-----|-------|
| `MONGO_URL` | Your MongoDB Atlas connection string |
| `FRONTEND_URL` | Your Vercel URL (e.g., `https://fsd-student-management.vercel.app`) |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |

### Step 5: Save & Deploy
1. Click **"Save"**
2. Render will automatically redeploy with the new settings
3. Go to the **"Events"** tab and watch the build logs
4. You should see:
   - ✅ Build started
   - ✅ `cd server && npm install` running
   - ✅ `cd server && npm start` running
   - ✅ Service deployed and "Live"

### Step 6: Test
Once it says "Live", test:
```bash
curl https://your-backend.onrender.com/
```

Should return:
```json
{"message":"Student Management API is running"}
```

---

## Why This Works

When you specify `cd server && npm install`:
- ✅ Navigates to `server/` first
- ✅ Finds `server/package.json`
- ✅ Installs dependencies correctly
- ✅ Starts the app from `server/npm start`

This bypasses all the `render.yaml` confusion.

---

## If It Still Fails

If you **still** get `/opt/render/project/src/package.json` error:

1. **Delete the entire service** and redeploy (fresh start)
2. When creating the new service, manually type in the build/start commands **before** deploying
3. Don't rely on `render.yaml` — explicitly set commands in the dashboard

---

## Files in Your Repo

These now support the deployment:
- **`render.yaml`** — Tells Render config (though dashboard overrides it)
- **`Procfile`** — Heroku-style config file (Render reads this too)
- **`build.sh`** — Fallback build script (if needed)
- **`server/package.json`** — Backend dependencies

---

## Summary

**Go to Render Dashboard NOW and:**
1. Click Settings on your service
2. Change Build Command to: `cd server && npm install`
3. Change Start Command to: `cd server && npm start`
4. Save
5. Wait for redeploy
6. Test with curl

That's it! This should work. 🚀
