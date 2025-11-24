import { useState, useEffect } from 'react';
import type { User } from '../types';

export const useAuthLogic = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const { api } = await import('../services/api');
    const response = await api.login(email, password);
    
    if (response.success && response.accessToken && response.user) {
      setToken(response.accessToken);
      setUser(response.user);
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));
    } else {
      throw new Error(response.message || 'Login failed');
    }
  };

  const register = async (username: string, email: string, password: string, role: "user" | "admin") => {
    const { api } = await import('../services/api');
    const response = await api.register(username, email, password, role);
    
    if (response.success && response.accessToken && response.user) {
      setToken(response.accessToken);
      setUser(response.user);
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));
    } else {
      throw new Error(response.message || 'Registration failed');
    }
  };

  const logout = async () => {
    const { api } = await import('../services/api');
    await api.logout();
    
    setUser(null);
    setToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };

  return {
    user,
    token,
    isLoading,
    login,
    register,
    logout,
  };
};
