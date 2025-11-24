import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Navbar: React.FC = () => {
  const { isAuthenticated, isAdmin, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="w-full bg-white/90 shadow-lg rounded-b-2xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-blue-700 tracking-tight">
              Store
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Products
            </Link>
            {isAuthenticated && isAdmin && (
              <Link
                to="/admin"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Auth Buttons/User Info */}
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <span className="text-base text-gray-600 font-semibold bg-gray-100 px-4 py-2 rounded-xl">
                  {user?.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold shadow transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
