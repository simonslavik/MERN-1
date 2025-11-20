import express from 'express';
import { createProduct, getProducts, getProductById , deleteProductById, updateProductById} from '../controllers/productController.js';
import { registerUser, loginUser, logoutUser, refreshTokenUser } from '../controllers/userController.js';
import type { Router } from 'express';
import {authMiddleware, isAdminMiddleware} from '../middleware/authMiddleware.js';
const productRoutes: Router = express.Router();
const authRoutes: Router = express.Router();


// Routes for product operations
productRoutes.post('/products', authMiddleware, isAdminMiddleware, createProduct);
productRoutes.get('/products', getProducts);
productRoutes.get('/products/:id', getProductById);
productRoutes.delete('/products/:id', authMiddleware, isAdminMiddleware, deleteProductById);
productRoutes.put('/products/:id', authMiddleware, isAdminMiddleware, updateProductById);
// User authentication routes could be added here as well

authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);
authRoutes.post('/logout', logoutUser);
authRoutes.post('/refresh-token', refreshTokenUser);

export { productRoutes, authRoutes };