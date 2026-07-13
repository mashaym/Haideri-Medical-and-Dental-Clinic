@echo off
REM Setup Script for Haideri Dental Clinic Website
REM This script automates initial setup

echo.
echo ================================
echo Haideri Dental Clinic Setup
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org
    pause
    exit /b 1
)

echo ✓ Node.js found:
node --version

echo.
echo ✓ npm found:
npm --version

echo.
echo Installing dependencies (this may take a few minutes)...
echo.

REM Install dependencies
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ================================
echo ✓ Setup completed successfully!
echo ================================
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Open browser to: http://localhost:3000
echo.
echo Or simply run: start.bat
echo.
pause
