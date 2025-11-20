import mongoose from 'mongoose';

import type { Request, Response } from "express";
import { Product } from "../models/Product.js";
import {validateProduct } from '../utils/validation.js';


const createProduct = async (req: Request, res: Response) => {
    try {
        const { error } = validateProduct(req.body);
        if (error) {
            const errorMessage = error.details && error.details[0] ? error.details[0].message : "Validation error";
            return res.status(400).json({ message: errorMessage });
        }
        const { name, price, description, imageUrl, inStock } = req.body;
        const newProduct = new Product({ name, price, description, imageUrl, inStock });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};

const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

const getProductById = async (req: Request, res: Response) => {
    try {
        
        const productId = req.params.id as string;
        if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
          return res.status(400).json({ message: "Invalid product ID" });
        }
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id as string;
        if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
          return res.status(400).json({ message: "Invalid product ID" });
        }
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};


const updateProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id as string;
        if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
          return res.status(400).json({ message: "Invalid product ID" });
        }
        const { error } = validateProduct(req.body);
        if (error) {
            const errorMessage = error.details && error.details[0] ? error.details[0].message : "Validation error";
            return res.status(400).json({ message: errorMessage });
        }
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
}

export { createProduct, getProducts, getProductById, deleteProductById, updateProductById };