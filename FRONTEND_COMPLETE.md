# Frontend Application - Complete Setup

## Overview

A fully functional React frontend has been created for your backend using Vite and Tailwind CSS. The application includes authentication, product management, and an admin dashboard.

## What's Been Created

### Core Files

1. **src/App.tsx** - Main application component with routing
2. **src/main.tsx** - Application entry point
3. **src/index.css** - Global styles with Tailwind CSS

### Components

1. **src/components/Navbar.tsx** - Navigation bar with user info and logout
2. **src/components/ProtectedRoute.tsx** - Route protection wrapper for authenticated routes

### Pages

1. **src/pages/Home.tsx** - Landing page with hero section and features
2. **src/pages/Products.tsx** - Product listing page
3. **src/pages/Login.tsx** - User login page
4. **src/pages/Register.tsx** - User registration page
5. **src/pages/Admin.tsx** - Admin dashboard for product management

### Services & Context

1. **src/services/api.ts** - API client with all backend endpoints
2. **src/context/AuthContext.tsx** - Authentication state management
3. **src/types/index.ts** - TypeScript type definitions

### Configuration Files

1. **.env.local** - Environment variables (API URL)
2. **.env.example** - Example environment variables
3. **tailwind.config.js** - Tailwind CSS configuration
4. **vite.config.ts** - Vite build configuration
5. **package.json** - Updated with react-router-dom dependency

## Features Implemented

### ✅ Authentication System
- User registration with email and password
- User login with credentials
- Logout functionality
- Token-based authentication (JWT)
- Persistent login using localStorage
- Protected routes for authenticated users
- Admin-only routes

### ✅ Product Management
- View all products with details
- Product filtering by stock status
- Admin dashboard to create products
- Admin dashboard to edit products
- Admin dashboard to delete products
- Real-time product list updates

### ✅ User Interface
- Responsive design (mobile, tablet, desktop)
- Modern Tailwind CSS styling
- Navigation bar with user information
- Error handling and validation
- Loading states
- Form validation
- Clean, professional appearance

### ✅ State Management
- React Context API for authentication
- Local storage for token persistence
- Automatic token refresh capability

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation component
│   │   └── ProtectedRoute.tsx       # Route protection
│   ├── context/
│   │   └── AuthContext.tsx          # Auth state management
│   ├── pages/
│   │   ├── Home.tsx                 # Landing page
│   │   ├── Products.tsx             # Product listing
│   │   ├── Login.tsx                # Login page
│   │   ├── Register.tsx             # Registration page
│   │   └── Admin.tsx                # Admin dashboard
│   ├── services/
│   │   └── api.ts                   # API client
│   ├── types/
│   │   └── index.ts                 # TypeScript types
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── .env.local                       # Environment variables
├── .env.example                     # Example env file
├── index.html                       # HTML template
├── vite.config.ts                   # Vite config
├── tailwind.config.js               # Tailwind config
├── tsconfig.json                    # TypeScript config
��── package.json                     # Dependencies
└── FRONTEND_README.md               # Detailed documentation
```

## Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment

The `.env.local` file is already set up with:
```
VITE_API_URL=http://localhost:3000/api
```

Update if your backend runs on a different URL.

### 3. Start Development Server

```bash
npm run dev
```

Access the application at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## Available Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Products listing | Public |
| `/login` | User login | Public |
| `/register` | User registration | Public |
| `/admin` | Admin dashboard | Admin only |

## API Integration

The frontend connects to your backend at the following endpoints:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh-token` - Refresh access token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Users
- `GET /api/users` - Get all users (admin)

## Authentication Flow

1. User registers or logs in
2. Backend returns `accessToken` and `refreshToken`
3. Tokens stored in localStorage
4. `accessToken` sent in Authorization header for protected requests
5. On expiration, `refreshToken` used to get new `accessToken`

## Technology Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **TypeScript 5.9** - Type safety
- **PostCSS 8** - CSS processing

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts

### Type Safety
- Full TypeScript support
- Type definitions for API responses
- Strict type checking

### Error Handling
- User-friendly error messages
- Form validation
- API error handling
- Loading states

### Performance
- Code splitting with React Router
- Lazy loading of routes
- Optimized Tailwind CSS
- Fast HMR (Hot Module Replacement)

## Development Commands

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### CORS Errors
Ensure backend CORS is configured to allow `http://localhost:5173`

### Port Already in Use
Vite will automatically use the next available port if 5173 is taken

### Build Errors
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Token Issues
- Check localStorage for tokens
- Verify backend token format
- Check browser console for errors

## Next Steps

1. Ensure backend is running on `http://localhost:3000`
2. Run `npm install` in the frontend directory
3. Run `npm run dev` to start the development server
4. Open `http://localhost:5173` in your browser
5. Test the application:
   - Register a new account
   - Login with credentials
   - Browse products
   - Test admin features (if admin account)

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## Notes

- The application uses localStorage for token persistence
- Admin features are only accessible to users with admin role
- All API requests include credentials for cookie-based auth
- The frontend is fully responsive and mobile-friendly
- Tailwind CSS provides a modern, clean design

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify backend is running and accessible
3. Check network tab in browser DevTools
4. Review the FRONTEND_README.md for detailed documentation
