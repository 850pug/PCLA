# PCLA - Recovery-Oriented Supportive Housing

Canada's recognized reference point for recovery-oriented supportive housing for individuals living with serious and persistent mental illness.

## 🚀 Deploy to Netlify

### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**:
   ```bash
   netlify init
   ```
   - Follow the prompts
   - Select "Create & configure a new site"
   - Choose your team
   - Site name: (optional, will auto-generate if skipped)
   - Build command: `npm run build`
   - Directory to deploy: `frontend/build`

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Netlify Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select your repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

### Option 3: Drag & Drop

1. **Build locally**:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Deploy**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `frontend/build` folder to the upload area

## 🛠️ Local Development

### Frontend Only
```bash
cd frontend
npm install
npm start
```

The site will open at `http://localhost:3000`

### Full Stack (Frontend + Backend)

**Frontend**:
```bash
cd frontend
npm install
npm start
```

**Backend** (in a separate terminal):
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## 📁 Project Structure

```
pcla/
├── frontend/           # React application
│   ├── src/
│   │   ├── pages/     # Page components
│   │   ├── components/# Reusable components
│   │   └── ...
│   ├── public/        # Static assets
│   └── package.json
├── backend/           # FastAPI backend (optional)
│   ├── server.py
│   └── requirements.txt
├── netlify.toml       # Netlify configuration
└── README.md
```

## 🌐 Environment Variables

If your backend is deployed separately, you can set environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add variables like:
   - `REACT_APP_API_URL` = your backend API URL

## 📝 Notes

- The `netlify.toml` file configures automatic deployment
- The `_redirects` file ensures React Router works correctly
- Node version is set to 18 via `.nvmrc`

## 🔗 Recovery Dimensions

The site focuses on five key recovery dimensions:
1. **Housing** - Safe, stable housing as the foundation
2. **Belonging** - Connection and community
3. **Purpose** - Meaningful activities and goals
4. **Health** - Physical and mental wellness
5. **Autonomy** - Independence and self-determination

## 📞 Support

For deployment issues:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)
