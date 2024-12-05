import mongoose, { Schema, Document } from 'mongoose';

// User Model
export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    index: true 
  },
  phone: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.model<IUser>('User', UserSchema);