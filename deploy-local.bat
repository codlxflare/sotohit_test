@echo off
echo ========================================
echo    Sotohit Local Deployment Script
echo ========================================

echo.
echo [1/4] Installing dependencies and building Frontend...
cd frontend
call npm install
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Frontend build failed!
    pause
    exit /b 1
)

echo.
echo [2/4] Fixing static paths for deployment...
cd build
powershell -Command "(Get-Content index.html) -replace 'src=\"/static/', 'src=\"./static/' | Set-Content index.html"
powershell -Command "(Get-Content index.html) -replace 'href=\"/static/', 'href=\"./static/' | Set-Content index.html"

echo.
echo [3/4] Creating deployment package...
cd ..\..
if exist deploy rmdir /s /q deploy
mkdir deploy
xcopy frontend\build deploy\ /E /I /Y

echo.
echo [4/4] Starting local server...
cd deploy
echo.
echo ========================================
echo    Deployment Ready!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo.
echo To start backend separately:
echo   cd backend
echo   pip install -r requirements.txt
echo   python server.py
echo.
echo Press any key to start frontend server...
pause
python -m http.server 3000
