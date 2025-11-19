const Payment = require('../models/Payment');

module.exports = {
  async list(req, res) {
    try {
      const payments = await Payment.find()
        .populate('invoice')
        .populate('employee');

      res.json(payments);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar pagamentos' });
    }
  },

  async get(req, res) {
    try {
      const payment = await Payment.findById(req.params.id)
        .populate('invoice')
        .populate('employee');

      if (!payment) return res.status(404).json({ error: 'Pagamento não encontrado' });

      res.json(payment);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar pagamento' });
    }
  },

  async create(req, res) {
    try {
      const payment = await Payment.create(req.body);
      res.status(201).json(payment);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar pagamento' });
    }
  },

  async update(req, res) {
    try {
      const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!payment) return res.status(404).json({ error: 'Pagamento não encontrado' });
      res.json(payment);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar pagamento' });
    }
  },

  async remove(req, res) {
    try {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      if (!payment) return res.status(404).json({ error: 'Pagamento não encontrado' });
      res.json({ message: 'Pagamento removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover pagamento' });
    }
  }
};