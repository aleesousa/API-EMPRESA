const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, trim: true, unique: true },
  contract: { type: mongoose.Schema.Types.ObjectId, ref: 'Contract', required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  issueDate: { type: Date, default: Date.now },
  dueDate: { type: Date, default: null },
  amount: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['pending','paid','overdue'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);