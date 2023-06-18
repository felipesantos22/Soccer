import { Schema } from 'mongoose';

export const timesSchema = new Schema(
  {
    name: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
