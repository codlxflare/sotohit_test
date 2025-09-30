@echo off
echo ========================================
echo    Sotohit GitHub Pages Deployment
echo ========================================

echo.
echo [1/3] Building Frontend...
cd frontend
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Fixing paths and copying images...
cd ..
call node fix-github-pages.js

echo.
echo [3/3] Preparing for GitHub Pages...
echo.
echo ========================================
echo    Deployment Ready!
echo ========================================
echo.
echo Next steps:
echo 1. Commit and push changes to GitHub
echo 2. GitHub Actions will automatically deploy to Pages
echo 3. Your site will be available at:
echo    https://codlxflare.github.io/sotohit_test
echo.
echo Press any key to continue...
pause
