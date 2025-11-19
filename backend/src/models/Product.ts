import mongoose, { Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    inStock: boolean;
}

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Product = mongoose.model<IProduct>('Product', ProductSchema );