
import type { Request, Response } from "express";
import { Product } from "../models/Product.js";


const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, description, inStock } = req.body;
        const newProduct = new Product({ name, price, description, inStock });
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
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

export { createProduct, getProducts, getProductById };