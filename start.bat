@echo off
REM Start Script for Haideri Dental Clinic Website
REM Starts the Next.js development server

echo.
echo ================================
echo Haideri Dental Clinic
echo Starting Development Server...
echo ================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo.
    echo ERROR: Dependencies not installed!
    echo Please run setup.bat first.
    echo.
    pause
    exit /b 1
)

echo Starting Next.js development server...
echo.
echo Once ready, the website will be available at:
echo   Local:   http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
