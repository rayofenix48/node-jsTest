import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true
  },
  
  authorId: {
    type: Number,
    required: true
  }
});


const books = mongoose.model("Books", bookSchema);
module.exports = books;