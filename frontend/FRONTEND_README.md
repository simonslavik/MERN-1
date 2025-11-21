# Frontend - Product Store

A modern React frontend built with Vite and Tailwind CSS for managing and browsing products.

## Features

- **Product Browsing**: View all available products with pricing and stock information
- **User Authentication**: Register and login functionality
- **Admin Dashboard**: Create, update, and delete products (admin only)
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Protected Routes**: Admin panel accessible only to authenticated admin users
- **State Management**: Context API for authentication state

## Tech Stack

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **TypeScript**: Type safety

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Navigation bar
│   └── ProtectedRoute.tsx # Route protection wrapper
├── context/            # React Context for state management
│   └── AuthContext.tsx # Authentication context
├── pages/              # Page components
│   ├── Products.tsx    # Product listing page
│   ├── Login.tsx       # Login page
│   ├── Register.tsx    # Registration page
│   └── Admin.tsx       # Admin dashboard
├── services/           # API service layer
│   └── api.ts         # API client functions
├── types/              # TypeScript type definitions
│   └── index.ts       # Shared types
├── App.tsx            # Main app component with routing
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## Setup

### Prerequisites

- Node.js 16+ and npm/yarn
- Backend API running on `http://localhost:3000`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

3. Update `.env.local` if your backend is running on a different URL:
```
VITE_API_URL=http://localhost:3000/api
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## API Integration

The frontend communicates with the backend API at the following endpoints:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh-token` - Refresh access token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Users
- `GET /api/users` - Get all users (admin only)

## Authentication Flow

1. User registers or logs in
2. Backend returns `accessToken` and `refreshToken`
3. Tokens are stored in localStorage
4. `accessToken` is sent in Authorization header for protected requests
5. On token expiration, `refreshToken` is used to get a new `accessToken`

## Pages

### Products Page (`/`)
- Displays all available products
- Shows product name, description, price, and stock status
- "Add to Cart" button (placeholder for future cart functionality)

### Login Page (`/login`)
- Email and password input
- Link to registration page
- Error handling and loading states

### Register Page (`/register`)
- Email, password, and confirm password inputs
- Password validation (minimum 6 characters)
- Link to login page

### Admin Dashboard (`/admin`)
- Protected route - requires admin authentication
- Create new products
- Edit existing products
- Delete products
- Table view of all products

## Styling

The project uses Tailwind CSS for styling. Key utility classes used:

- Layout: `flex`, `grid`, `max-w-*`, `mx-auto`
- Spacing: `px-*`, `py-*`, `mb-*`, `gap-*`
- Colors: `bg-*`, `text-*`, `border-*`
- Effects: `shadow-*`, `rounded-*`, `hover:*`
- Responsive: `md:*`, `lg:*`

## Environment Variables

Create a `.env.local` file in the frontend directory:

```
VITE_API_URL=http://localhost:3000/api
```

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure:
- Backend CORS is configured to allow `http://localhost:5173`
- Backend is running on the correct port
- `VITE_API_URL` in `.env.local` matches your backend URL

### Authentication Issues
- Check that tokens are being stored in localStorage
- Verify backend is returning tokens in the correct format
- Check browser console for detailed error messages

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist && npm run build`

## Future Enhancements

- Shopping cart functionality
- Order management
- Product search and filtering
- User profile page
- Product reviews and ratings
- Payment integration
- Wishlist feature
