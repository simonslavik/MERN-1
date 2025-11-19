import express from 'express';
import { createProduct, getProducts, getProductById } from '../controllers/productController.js';

const productRoutes = express.Router();


// Routes for product operations
productRoutes.post('/products', createProduct);
productRoutes.get('/products', getProducts);
productRoutes.get('/products/:id', getProductById);
export default productRoutes;