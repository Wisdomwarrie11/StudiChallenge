import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  email: string;
  name: string;
  qualification: string;
  referralSource: string;
  amount: number;
  reference: string;
  status: string;
  paidAt: Date;
  paystackId?: number;
  createdAt: Date;
}

const PaymentSchema: Schema = new Schema({
  email: { 
    type: String, 
    required: true,
    trim: true,
    lowercase: true 
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  qualification: {
    type: String,
    required: false
  },
  referralSource: {
    type: String,
    required: false
  },
  amount: { 
    type: Number, 
    required: true 
  },
  reference: { 
    type: String, 
    required: true, 
    unique: true 
  },
  status: { 
    type: String, 
    required: true,
    enum: ['success', 'failed', 'pending']
  },
  paidAt: { 
    type: Date 
  },
  paystackId: {
    type: Number
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

export const PaymentModel = mongoose.model<IPayment>('Payment', PaymentSchema);