export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
export interface User {
  _id: string;
  email: string;
  username: string;
  role: 'user' | 'admin';
  createdAt: string;
  // password is typically excluded for security reasons
}

export interface AuthResponse {
  success: boolean;
  message: string;
  accessToken?: string;
  refreshToken?: string;
  user?: User;
}

export interface ProductResponse {
  success: boolean;
  message: string;
  data?: Product | Product[];
}
