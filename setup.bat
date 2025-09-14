@echo off
echo 🚀 Setting up Watch Shop MERN Stack Application...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install root dependencies
echo 📦 Installing root dependencies...
npm install

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
npm install
cd ..

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
npm install
cd ..

REM Create backend .env file if it doesn't exist
if not exist backend\.env (
    echo 📝 Creating backend .env file...
    (
        echo MONGO_URI=mongodb+srv://shashankedu49:NC0rJKTOQnDGH8z1@cluster0.bkt7zy3.mongodb.net/?retryWrites=true^&w=majority^&appName=Cluster0
        echo PORT=5000
        echo JWT_SECRET=your_super_secret_jwt_key_2024
        echo NODE_ENV=development
    ) > backend\.env
    echo ✅ Backend .env file created
) else (
    echo ✅ Backend .env file already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Next steps:
echo 1. Start the development servers:
echo    npm run dev
echo.
echo 2. Seed the database (in a new terminal):
echo    cd backend ^&^& npm run seed
echo.
echo 3. Open your browser and visit:
echo    http://localhost:3000
echo.
echo 🔑 Default login credentials:
echo    Admin: admin@watchshop.com / admin123
echo    Delivery: delivery@watchshop.com / delivery123
echo    Customer: customer@watchshop.com / customer123
echo.
echo 📚 For deployment instructions, see DEPLOYMENT.md
pause
