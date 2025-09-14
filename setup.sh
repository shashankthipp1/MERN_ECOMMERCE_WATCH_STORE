#!/bin/bash

echo "🚀 Setting up Watch Shop MERN Stack Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create backend .env file if it doesn't exist
if [ ! -f backend/.env ]; then
    echo "📝 Creating backend .env file..."
    cat > backend/.env << EOL
MONGO_URI=mongodb+srv://shashankedu49:NC0rJKTOQnDGH8z1@cluster0.bkt7zy3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_2024
NODE_ENV=development
EOL
    echo "✅ Backend .env file created"
else
    echo "✅ Backend .env file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Start the development servers:"
echo "   npm run dev"
echo ""
echo "2. Seed the database (in a new terminal):"
echo "   cd backend && npm run seed"
echo ""
echo "3. Open your browser and visit:"
echo "   http://localhost:3000"
echo ""
echo "🔑 Default login credentials:"
echo "   Admin: admin@watchshop.com / admin123"
echo "   Delivery: delivery@watchshop.com / delivery123"
echo "   Customer: customer@watchshop.com / customer123"
echo ""
echo "📚 For deployment instructions, see DEPLOYMENT.md"
