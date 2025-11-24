# Quick Start Guide

## 🚀 Get the Frontend Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:5173`

---

## 📋 What You Get

✅ **Product Listing** - Browse all products  
✅ **User Authentication** - Register and login  
✅ **Admin Dashboard** - Create, edit, delete products  
✅ **Responsive Design** - Works on all devices  
✅ **Modern UI** - Built with Tailwind CSS  

---

## 🔑 Test Credentials

After registering, you can:
- Login with your email and password
- Browse products as a regular user
- Access admin panel if you have admin role

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # State management
│   ├── pages/          # Page components
│   ├── services/       # API client
│   ├── types/          # TypeScript types
│   └── App.tsx         # Main app
├── .env.local          # Configuration
├── package.json        # Dependencies
└── tailwind.config.js  # Tailwind setup
```

---

## 🌐 Available Pages

| URL | Purpose |
|-----|---------|
| `/` | Product listing |
| `/login` | User login |
| `/register` | User registration |
| `/admin` | Admin dashboard (admin only) |

---

## ⚙️ Configuration

The `.env.local` file contains:
```
VITE_API_URL=http://localhost:3000/api
```

Change this if your backend runs on a different URL.

---

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🔗 Backend Connection

The frontend connects to your backend API at:
```
http://localhost:3000/api
```

Make sure your backend is running before starting the frontend!

---

## 📱 Features

### For Users
- Register with email and password
- Login to your account
- Browse all available products
- View product details (name, price, stock)
- Logout from your account

### For Admins
- Access admin dashboard
- Create new products
- Edit existing products
- Delete products
- View all products in a table

---

## 🎨 Styling

The frontend uses **Tailwind CSS** for styling:
- Responsive design
- Modern color scheme
- Smooth transitions
- Mobile-friendly layout

---

## 🔐 Authentication

- Tokens stored in localStorage
- Automatic token refresh
- Protected routes for authenticated users
- Admin-only routes

---

## ❓ Troubleshooting

### Port 5173 already in use?
Vite will automatically use the next available port.

### CORS errors?
Make sure your backend allows requests from `http://localhost:5173`

### Can't login?
- Check backend is running
- Verify credentials are correct
- Check browser console for errors

### Build fails?
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

---

## ✨ Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Open browser to http://localhost:5173
4. ✅ Register a new account
5. ✅ Explore the application
6. ✅ Test admin features (if applicable)

---

**Happy coding! 🎉**
