import mongoose, { Schema, Document } from 'mongoose';

// Product Model
export interface IProduct extends Document {
    name: string;
    category: string;
    price: number;
    stockQuantity: number;
  }
  
  const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stockQuantity: { 
      type: Number, 
      required: true, 
      min: 0,
      index: true 
    }
  }, { timestamps: true });

  export const Product = mongoose.model<IProduct>('Product', ProductSchema);