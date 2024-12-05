import mongoose, { Schema, Document } from 'mongoose';

// Order Model
export interface IOrder extends Document {
    user: mongoose.Types.ObjectId;
    product: mongoose.Types.ObjectId;
    quantity: number;
    orderDate: Date;
  }
  
  const OrderSchema: Schema = new Schema({
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true,
      index: true 
    },
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true,
      index: true 
    },
    quantity: { type: Number, required: true, min: 1 },
    orderDate: { 
      type: Date, 
      default: Date.now,
      index: true 
    }
  }, { timestamps: true });

  export const Order = mongoose.model<IOrder>('Order', OrderSchema);
  