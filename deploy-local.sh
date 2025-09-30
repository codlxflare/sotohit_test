#!/bin/bash

echo "========================================"
echo "   Sotohit Local Deployment Script"
echo "========================================"

echo ""
echo "[1/4] Building Frontend..."
cd frontend
npm run build
if [ $? -ne 0 ]; then
    echo "ERROR: Frontend build failed!"
    exit 1
fi

echo ""
echo "[2/4] Fixing static paths for deployment..."
cd build
sed -i 's|src="/static/|src="./static/|g' index.html
sed -i 's|href="/static/|href="./static/|g' index.html

echo ""
echo "[3/4] Creating deployment package..."
cd ../..
rm -rf deploy
mkdir deploy
cp -r frontend/build/* deploy/

echo ""
echo "[4/4] Starting local server..."
cd deploy
echo ""
echo "========================================"
echo "   Deployment Ready!"
echo "========================================"
echo ""
echo "Frontend: http://localhost:3000"
echo ""
echo "To start backend separately:"
echo "  cd backend"
echo "  pip install -r requirements.txt"
echo "  python server.py"
echo ""
echo "Press any key to start frontend server..."
read -n 1
python -m http.server 3000
