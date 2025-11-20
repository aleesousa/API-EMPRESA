const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  totalValue: { type: Number, default: 0, min: 0 },
  signedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: null },
  status: { type: String, enum: ['active','expired','terminated'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contract', ContractSchema);