# Locals Coffee - Daily Sudoku App

A daily Sudoku puzzle app for coffee shop loyalty rewards.

## Features
- Daily Sudoku puzzles
- Discount codes (5-15% off)
- Streak system with FREE coffee after 5 consecutive redemptions
- Barista verification terminal
- Shared storage for code management

## Deployment to Vercel

### Option 1: Upload via GitHub
1. Delete everything in your `donrous.github.io` repository
2. Upload all files from this folder
3. Push to GitHub
4. Vercel will auto-deploy

### Option 2: Deploy from Local
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## Local Development
```bash
npm install
npm run dev
```

Open http://localhost:3000

## File Structure
```
app/
  ├── layout.js    # Layout wrapper
  └── page.js      # Main app component
package.json       # Dependencies
```

## How It Works
- Customer plays Sudoku → Gets discount code
- Code saves to shared storage (visible to all users)
- Barista verifies code at terminal
- Streak counter advances on redemption
