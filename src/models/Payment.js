const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  invoice: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', default: null }, // who registered
  paidAt: { type: Date, default: Date.now },
  amount: { type: Number, required: true, min: 0 },
  method: { type: String, default: null }, // ex: credit_card, bank_transfer
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);