# Frontend Setup Guide

## Quick Start

### 1. Install Dependencies

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

### 2. Configure Environment

The `.env.local` file is already created with the default backend URL. If your backend runs on a different port, update it:

```bash
# frontend/.env.local
VITE_API_URL=http://localhost:3000/api
```

### 3. Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── context/             # React Context
│   │   └── AuthContext.tsx
│   ├── pages/               # Page components
│   │   ├── Products.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Admin.tsx
│   ├── services/            # API client
│   │   └── api.ts
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Features Implemented

### ✅ Authentication
- User registration with email and password
- User login with credentials
- Logout functionality
- Protected routes for authenticated users
- Admin-only routes

### ✅ Product Management
- View all products with details (name, description, price, stock)
- Admin dashboard to create, edit, and delete products
- Real-time product list updates

### ✅ UI/UX
- Responsive design with Tailwind CSS
- Navigation bar with user info
- Error handling and loading states
- Form validation
- Clean, modern interface

## API Endpoints Used

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh-token` - Refresh token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Users
- `GET /api/users` - Get all users (admin)

## Available Routes

- `/` - Products listing page (public)
- `/login` - Login page (public)
- `/register` - Registration page (public)
- `/admin` - Admin dashboard (protected, admin only)

## Development Tips

### Hot Module Replacement (HMR)
Changes to your code will automatically refresh in the browser during development.

### TypeScript
The project uses TypeScript for type safety. Type definitions are in `src/types/index.ts`.

### Tailwind CSS
Utility classes are used throughout. Refer to [Tailwind documentation](https://tailwindcss.com/docs) for available classes.

### State Management
Authentication state is managed using React Context API in `src/context/AuthContext.tsx`.

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### CORS Errors
Ensure your backend has CORS configured to allow requests from `http://localhost:5173`.

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules dist
npm install
npm run build
```

## Next Steps

1. Start the backend server (if not already running)
2. Run `npm run dev` in the frontend directory
3. Open `http://localhost:5173` in your browser
4. Register a new account or login
5. Browse products and test admin features

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
