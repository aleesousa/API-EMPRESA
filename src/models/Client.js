const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  contactName: { type: String, default: null },
  email: { type: String, default: null, trim: true, lowercase: true },
  phone: { type: String, default: null },
  document: { type: String, default: null }, // CPF or CNPJ
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);