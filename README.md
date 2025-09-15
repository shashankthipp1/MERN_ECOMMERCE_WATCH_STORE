# 🛍️ E-Commerce Watch Store    https://ewc.netlify.app

A complete online store for watches, wall clocks, and accessories with admin and delivery management features.

## 📋 What This Project Does

This is a **full-stack e-commerce application** that allows you to:
- **Shop online** for watches, wall clocks, and accessories
- **Manage orders** as an admin
- **Handle deliveries** as a delivery person
- **Track order status** from purchase to delivery

## 🎯 Who Can Use This

### 👤 **Customers (Regular Users)**
- Browse and buy products
- Add items to cart
- Place orders
- Track order history
- Update profile

### 👨‍💼 **Admins**
- Manage all products
- View all orders
- Assign orders to delivery people
- Update order status
- Manage user accounts

### 🚚 **Delivery People**
- View assigned orders
- Update delivery status
- Track delivery progress

## 🚀 How to Get Started

### **Step 1: Download and Setup**
1. Download this project to your computer
2. Make sure you have **Node.js** installed (download from [nodejs.org](https://nodejs.org/))
3. Open your computer's command prompt or terminal

### **Step 2: Install Dependencies**
Run these commands one by one:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### **Step 3: Setup Database**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new database
3. Copy your database connection string
4. Create a file called `.env` in the `backend` folder
5. Add this line to the `.env` file:
```
MONGODB_URI=your_database_connection_string_here
```

### **Step 4: Add Product Images**
1. Go to `frontend/public/images/products/` folder
2. Create these folders if they don't exist:
   - `watches/`
   - `wall-clocks/`
   - `accessories/`
3. Upload your product images with these names:
   - **Watches**: `watch-1.jpg`, `watch-2.jpg`, ... up to `watch-30.jpg`
   - **Wall Clocks**: `clock-1.jpg`, `clock-2.jpg`, ... up to `clock-30.jpg`
   - **Accessories**: `accessory-1.jpg`, `accessory-2.jpg`, ... up to `accessory-30.jpg`

### **Step 5: Start the Application**
Open two command prompts/terminals:

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

### **Step 6: Access the Application**
- Open your web browser
- Go to `http://localhost:3001`
- You should see the online store!

## 📁 Project Structure

```
📦 E-Commerce Store
├── 📁 backend/           # Server-side code
│   ├── 📁 models/        # Database models
│   ├── 📁 routes/        # API endpoints
│   ├── 📁 middleware/    # Authentication
│   └── 📁 scripts/       # Database setup
├── 📁 frontend/          # Website code
│   ├── 📁 src/           # React components
│   ├── 📁 public/        # Static files (images)
│   └── 📁 build/         # Production build
└── 📄 README.md          # This file
```

## 🔧 Technical Details

### **Backend (Server)**
- **Node.js** with **Express.js** framework
- **MongoDB** database
- **JWT** authentication
- **RESTful API** design

### **Frontend (Website)**
- **React.js** framework
- **Tailwind CSS** for styling
- **Context API** for state management
- **Axios** for API calls

## 🎨 Features

### **For Customers**
- ✅ User registration and login
- ✅ Product browsing with categories
- ✅ Shopping cart functionality
- ✅ Order placement and tracking
- ✅ Profile management

### **For Admins**
- ✅ Admin dashboard
- ✅ Product management
- ✅ Order management
- ✅ User management
- ✅ Delivery assignment

### **For Delivery People**
- ✅ Delivery dashboard
- ✅ Assigned orders view
- ✅ Status updates
- ✅ Customer information

## 🖼️ Adding Your Own Images

### **Image Requirements**
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400 pixels (recommended)
- **Quality**: High resolution for best display

### **Upload Steps**
1. **Prepare your images** (resize to 400x400 if needed)
2. **Rename them** according to the naming convention
3. **Upload to the correct folder**:
   - Watches → `frontend/public/images/products/watches/`
   - Wall Clocks → `frontend/public/images/products/wall-clocks/`
   - Accessories → `frontend/public/images/products/accessories/`

### **Naming Convention**
- **Watches**: `watch-1.jpg`, `watch-2.jpg`, `watch-3.jpg`, etc.
- **Wall Clocks**: `clock-1.jpg`, `clock-2.jpg`, `clock-3.jpg`, etc.
- **Accessories**: `accessory-1.jpg`, `accessory-2.jpg`, `accessory-3.jpg`, etc.

## 🔄 Updating the Database

After adding new images, run this command to update your database:

```bash
cd backend
node scripts/seedDatabase.js
```

This will:
- Clear old product data
- Add new products with your images
- Create sample users and orders

## 🚨 Troubleshooting

### **Common Issues**

**❌ "Cannot find module" error**
- Make sure you ran `npm install` in both `backend` and `frontend` folders

**❌ "Database connection failed"**
- Check your `.env` file has the correct MongoDB connection string
- Make sure your internet connection is working

**❌ "Images not showing"**
- Verify images are in the correct folder
- Check image names match exactly (case-sensitive)
- Make sure images are in JPG, PNG, or WebP format

**❌ "Port already in use"**
- Close other applications using port 3000 or 5000
- Or change the port in the configuration files

### **Getting Help**
1. Check the error messages in your terminal
2. Make sure all steps were followed correctly
3. Verify your Node.js version (should be 14 or higher)

## 📱 Mobile Responsive

This application works on:
- 💻 Desktop computers
- 📱 Mobile phones
- 📱 Tablets
- 🖥️ Different screen sizes

## 🔒 Security Features

- **Password encryption** for user accounts
- **JWT tokens** for secure authentication
- **Role-based access** control
- **Protected routes** for admin and delivery features

## 🎯 Future Enhancements

Potential features you can add:
- 💳 Payment integration (Stripe, PayPal)
- 📧 Email notifications
- 📊 Sales analytics
- 🔍 Advanced search and filters
- ⭐ Product reviews and ratings
- 📱 Mobile app version

## 📞 Support

If you need help:
1. Check this README first
2. Look at the error messages
3. Verify all setup steps
4. Make sure your images are properly named and placed

## 🎉 Congratulations!

You now have a fully functional e-commerce store! You can:
- Add your own products and images
- Customize the design
- Add new features
- Deploy it online

**Happy selling! 🛍️✨**
