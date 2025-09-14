# Watch Shop - Deployment Guide

This guide will help you deploy the Watch Shop MERN stack application to production.

## Prerequisites

- GitHub account
- MongoDB Atlas account (free tier available)
- Render account (for backend)
- Vercel account (for frontend)

## Step 1: Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account
   - Create a new cluster (choose the free M0 tier)

2. **Configure Database Access**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Create a username and password (save these credentials)
   - Set privileges to "Read and write to any database"

3. **Configure Network Access**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Choose "Allow access from anywhere" (0.0.0.0/0) for development
   - For production, add specific IP addresses

4. **Get Connection String**
   - Go to "Clusters" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name (e.g., `watchshop`)

## Step 2: Backend Deployment (Render)

1. **Prepare Backend for Deployment**
   - Ensure your backend code is pushed to GitHub
   - The backend should be in the `backend/` folder

2. **Deploy to Render**
   - Go to [Render](https://render.com)
   - Sign up/Login with your GitHub account
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Choose the repository containing your code

3. **Configure Backend Service**
   - **Name**: `watch-shop-backend` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty (or set to `backend` if needed)

4. **Set Environment Variables**
   - In the Render dashboard, go to your service
   - Click on "Environment" tab
   - Add the following environment variables:
     ```
     MONGO_URI=your_mongodb_connection_string_here
     JWT_SECRET=your_super_secret_jwt_key_2024
     NODE_ENV=production
     PORT=10000
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note the service URL (e.g., `https://watch-shop-backend.onrender.com`)

## Step 3: Frontend Deployment (Vercel)

1. **Prepare Frontend for Deployment**
   - Ensure your frontend code is pushed to GitHub
   - The frontend should be in the `frontend/` folder

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Frontend Project**
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Set Environment Variables**
   - In the Vercel dashboard, go to your project
   - Click on "Settings" → "Environment Variables"
   - Add the following environment variable:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com
     ```

5. **Update Frontend API Configuration**
   - In your frontend code, update the API base URL
   - You can use the environment variable `REACT_APP_API_URL`
   - Or hardcode the backend URL in your axios configuration

6. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note the frontend URL (e.g., `https://watch-shop-frontend.vercel.app`)

## Step 4: Database Seeding

1. **Seed the Database**
   - You can run the seeding script locally or on the server
   - To run locally, make sure your `.env` file points to the production database
   - Run: `cd backend && npm run seed`

2. **Verify Data**
   - Check your MongoDB Atlas dashboard
   - Verify that products, users, and other data are created

## Step 5: Testing the Deployment

1. **Test Backend**
   - Visit your backend URL: `https://your-backend-url.onrender.com`
   - You should see: `{"message": "Watch Shop API is running!"}`

2. **Test Frontend**
   - Visit your frontend URL
   - Try registering a new user
   - Browse products
   - Add items to cart
   - Place an order

3. **Test Admin Functions**
   - Login with admin credentials: `admin@watchshop.com` / `admin123`
   - Access admin dashboard
   - Manage products and orders

## Step 6: Domain Configuration (Optional)

1. **Custom Domain for Frontend**
   - In Vercel, go to your project settings
   - Add your custom domain
   - Configure DNS settings as instructed

2. **Custom Domain for Backend**
   - In Render, you can add a custom domain
   - Update your frontend environment variables accordingly

## Environment Variables Summary

### Backend (Render)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_2024
NODE_ENV=production
PORT=10000
```

### Frontend (Vercel)
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## Default Accounts

After seeding the database, you can use these default accounts:

- **Admin**: `admin@watchshop.com` / `admin123`
- **Delivery Boy**: `delivery@watchshop.com` / `delivery123`
- **Customer**: `customer@watchshop.com` / `customer123`

## Troubleshooting

### Common Issues

1. **Backend not starting**
   - Check environment variables in Render
   - Verify MongoDB connection string
   - Check build logs in Render dashboard

2. **Frontend can't connect to backend**
   - Verify `REACT_APP_API_URL` environment variable
   - Check CORS settings in backend
   - Ensure backend is running and accessible

3. **Database connection issues**
   - Verify MongoDB Atlas network access settings
   - Check database user credentials
   - Ensure connection string is correct

4. **Build failures**
   - Check package.json dependencies
   - Verify build commands
   - Check for any missing environment variables

### Useful Commands

```bash
# Test backend locally
cd backend
npm install
npm run dev

# Test frontend locally
cd frontend
npm install
npm start

# Seed database
cd backend
npm run seed
```

## Security Considerations

1. **Environment Variables**
   - Never commit `.env` files to version control
   - Use strong, unique JWT secrets
   - Rotate secrets regularly

2. **Database Security**
   - Use strong database passwords
   - Restrict network access to specific IPs in production
   - Enable MongoDB Atlas security features

3. **API Security**
   - Implement rate limiting
   - Add input validation
   - Use HTTPS in production

## Monitoring and Maintenance

1. **Monitor Performance**
   - Use Render and Vercel analytics
   - Monitor MongoDB Atlas metrics
   - Set up error tracking

2. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Backup database regularly

3. **Scaling**
   - Monitor resource usage
   - Upgrade plans as needed
   - Consider CDN for static assets

## Support

If you encounter issues during deployment:

1. Check the deployment logs in Render/Vercel
2. Verify all environment variables are set correctly
3. Test the application locally first
4. Check MongoDB Atlas connection and permissions
5. Review the troubleshooting section above

For additional help, refer to:
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
