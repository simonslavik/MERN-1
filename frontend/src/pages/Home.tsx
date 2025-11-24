import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Home: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Store
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover amazing products at great prices. Browse our collection and
            find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition inline-block"
            >
              Browse Products
            </Link>
            {!isAuthenticated && (
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition inline-block"
              >
                Get Started
              </Link>
            )}
            {isAdmin && (
              <Link
                to="/admin"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition inline-block"
              >
                Admin Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Wide Selection
              </h3>
              <p className="text-gray-300">
                Browse through our extensive collection of quality products.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Great Prices
              </h3>
              <p className="text-gray-300">
                Competitive pricing with regular discounts and special offers.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Shopping
              </h3>
              <p className="text-gray-300">
                Your data is protected with industry-standard security measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shop?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            {isAuthenticated
              ? "Start browsing our products now!"
              : "Create an account to get started with exclusive deals."}
          </p>
          <Link
            to={isAuthenticated ? "/" : "/register"}
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition inline-block"
          >
            {isAuthenticated ? "Browse Products" : "Sign Up Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};
