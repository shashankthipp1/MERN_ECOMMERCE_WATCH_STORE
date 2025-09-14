# Watch Shop - MERN Stack eCommerce Application

A complete eCommerce web application for a Watch Shop built with MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

### 👤 User Features
- User authentication (Register/Login) using JWT
- Browse products by category (Watches, WallClocks, Accessories)
- Add products to cart
- Place orders with "Cash on Delivery"
- View order history with statuses
- User profile management

### 👨‍💼 Admin Features
- Admin authentication
- Add/Edit/Delete products
- View all orders
- Assign orders to delivery boys
- Update order status
- Product inventory management

### 🚚 Delivery Boy Features
- Delivery boy login
- View assigned orders
- Update order status (Pending → Out for Delivery → Delivered)
- Customer contact information

## 🛠 Tech Stack

- **Frontend:** React 18, Context API, Axios, TailwindCSS, React Router
- **Backend:** Node.js, Express.js, JWT, bcrypt
- **Database:** MongoDB Atlas
- **Authentication:** JWT with role-based access control
- **Styling:** TailwindCSS with custom components
- **Deployment:** Render (Backend), Vercel (Frontend)

## 📦 Quick Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free)

### Automated Setup (Recommended)

**For Windows:**
```bash
setup.bat
```

**For macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd watch-shop-mern
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend && npm install && cd ..
   
   # Install frontend dependencies
   cd frontend && npm install && cd ..
   ```

3. **Set up environment variables**
   
   Create `backend/.env` file:
   ```env
   MONGO_URI=mongodb+srv://shashankthipp1_db_user:BjN2meFvw2MZAOHT@cluster0.v8jjbgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   JWT_SECRET=your_super_secret_jwt_key_2024
   NODE_ENV=development
   ```

4. **Seed the database**
   ```bash
   cd backend && npm run seed
   ```

5. **Start the application**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔑 Default Accounts

After seeding the database, you can use these accounts:

- **Admin:** `admin@watchshop.com` / `admin123`
- **Delivery Boy:** `delivery@watchshop.com` / `delivery123`
- **Customer:** `customer@watchshop.com` / `customer123`

## 📱 Application Structure

```
watch-shop-mern/
├── backend/                 # Express.js API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication middleware
│   ├── scripts/            # Database seeding
│   └── server.js           # Main server file
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   └── App.js          # Main app component
│   └── public/             # Static files
├── package.json            # Root package.json
├── setup.sh               # Setup script (macOS/Linux)
├── setup.bat              # Setup script (Windows)
└── DEPLOYMENT.md          # Deployment guide
```

## 🚀 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

### Quick Deployment Summary

1. **Database:** MongoDB Atlas (free tier)
2. **Backend:** Render (free tier)
3. **Frontend:** Vercel (free tier)

## 🧪 Testing the Application

1. **User Flow:**
   - Register/Login as a customer
   - Browse products by category
   - Add items to cart
   - Place an order
   - View order history

2. **Admin Flow:**
   - Login as admin
   - Manage products (add/edit/delete)
   - View all orders
   - Assign orders to delivery boys

3. **Delivery Flow:**
   - Login as delivery boy
   - View assigned orders
   - Update order status

## 📊 Database Schema

### Users Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (user/admin/deliveryBoy),
  phone: String,
  address: Object
}
```

### Products Collection
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: String (URL),
  stock: Number,
  category: String (Watches/WallClocks/Accessories),
  brand: String,
  features: [String],
  isActive: Boolean
}
```

### Orders Collection
```javascript
{
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  total: Number,
  status: String (Pending/Out for Delivery/Delivered/Cancelled),
  assignedDeliveryBoy: ObjectId (ref: User),
  shippingAddress: Object,
  paymentMethod: String,
  orderDate: Date,
  deliveryDate: Date
}
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend
- `npm run install-all` - Install all dependencies
- `npm run build` - Build frontend for production

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🛡 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 📈 Performance Features

- Pagination for products and orders
- Image optimization
- Responsive design
- Lazy loading
- Efficient database queries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [troubleshooting section](DEPLOYMENT.md#troubleshooting) in DEPLOYMENT.md
2. Verify all environment variables are set correctly
3. Ensure MongoDB Atlas is accessible
4. Check the console for error messages

## 🎯 Future Enhancements

- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Advanced search and filtering
- [ ] Inventory management
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support
