import mongoose from "mongoose";
import Category from "./category.js";

const bookSchema = new  mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    categoryId: [{
        type: mongoose.Types.ObjectId,
        ref: Category,
      }],
    images: [String],
    price: {
        type: Number,
        require: true
    },
    rating: [{
        type: Number,
        require: true
    }],
    stock: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now, 
      }
},
  {
    timestamps: true,
    versionKey: false,
  });

  export default mongoose.model('Book', bookSchema);