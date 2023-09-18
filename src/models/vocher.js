const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['percentage', 'fixed', 'free-shipping', 'first-purchase', 'birthday', 'gift', 'bulk-order', 'custom'], 
  },
  discount: {
    type: Number,
    required: true,
  },
  validFrom: {
    type: Date,
    required: true,
  },
  validTo: {
    type: Date,
    required: true,
  },
  minimumOrderAmount: {
    type: Number,
  },
  productCategory: {
    type: String,
  },
  numberOfUses: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now, 
  }
  // Các trường khác tùy thuộc vào loại voucher
});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher;