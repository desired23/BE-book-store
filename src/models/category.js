import mongoose from "mongoose";

const categorySchema = new  mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    books: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Book",
        },
      ],
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

  export default mongoose.model('Category', categorySchema);