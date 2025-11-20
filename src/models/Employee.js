const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  cpf: { type: String, required: true, unique: true, trim: true },
  phone: { type: String, default: null },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  role: { type: String, default: null },
  hiredAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);