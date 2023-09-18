import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Đảm bảo không có trùng lặp
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Thêm các trường thông tin người dùng khác tùy ý
});

// Tạo model cho collection "users"
const User = mongoose.model('User', userSchema);

module.exports = User;