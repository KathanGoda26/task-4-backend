import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    product: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
    },
    paymentStatus: {
      type: String,
      enum: ['Success', 'Failed', 'Pending'],
      required: true,
    },
    paymentDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
