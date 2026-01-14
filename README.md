# Jyothika Chowdary - Portfolio Website

A premium, interactive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. It features a glassmorphism design, smooth animations, and a "Fun Zone" mini-game.

## 🚀 Technologies Used

- **Frontend Framework**: React (Vite)
- **Styling**: Tailwind CSS (with custom Glassmorphism utilities)
- **Animations**: Framer Motion
- **Language**: JavaScript (ES6+)
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📂 Folder Structure

```
/
├── public/              # Static assets (logo, resume)
├── src/
│   ├── assets/          # Images (profile.png)
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Responsive Navigation
│   │   ├── Hero.jsx     # Landing section with Typewriter effect
│   │   ├── Resume.jsx   # Vertical Timeline
│   │   ├── FunZone.jsx  # "Whack-a-Bug" Mini-game
│   │   └── ...
│   ├── data.js          # Centralized content file (easier to update)
│   ├── App.jsx          # Main Layout
│   ├── main.jsx         # Entry Point
│   └── index.css        # Global Styles & Tailwind Config
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Setup Instructions

1.  **Install Node.js**: Ensure you have Node.js installed.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Locally**:
    ```bash
    npm run dev
    ```
    Open the link shown in the terminal (usually `http://localhost:5173`) to view the site.

## 🌍 Hosting on GitHub Pages (Free)

Since this is a React Single Page Application (SPA), it can be easily hosted on GitHub Pages.

### Step 1: Push Code to GitHub

1.  Initialize Git:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on GitHub (e.g., `Portfolio-Website-Jyothika`).
3.  Link remote and push:
    ```bash
    git remote add origin https://github.com/<your-username>/Portfolio-Website-Jyothika.git
    git branch -M main
    git push -u origin main
    ```

### Step 2: Configure for Deployment

1.  Open `vite.config.js` and ensure `base` matches your repository name:

    ```javascript
    export default defineConfig({
      plugins: [react()],
      base: "/Portfolio-Website-Jyothika/", // CHANGE THIS if your repo name is different
    });
    ```

    _Note: If you are deploying to `<username>.github.io` (user site), set `base: '/'`._

2.  Open `package.json` and ensure the `deploy` script exists (already added):
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```

### Step 3: Deploy

Run the following command:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch. Your site will be live at `https://<your-username>.github.io/Portfolio-Website-Jyothika/`.

## 📝 Customization

- **Update Content**: Edit `src/data.js` to update your Experience, Skills, or Projects without touching the code.
- **Change Colors**: Modify `tailwind.config.js` or `src/index.css`.
