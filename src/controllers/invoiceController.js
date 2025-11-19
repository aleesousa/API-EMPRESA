const Invoice = require('../models/Invoice');

module.exports = {
  async list(req, res) {
    try {
      const invoices = await Invoice.find()
        .populate('client')
        .populate('contract');

      res.json(invoices);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar faturas' });
    }
  },

  async get(req, res) {
    try {
      const invoice = await Invoice.findById(req.params.id)
        .populate('client')
        .populate('contract');

      if (!invoice) return res.status(404).json({ error: 'Fatura não encontrada' });

      res.json(invoice);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar fatura' });
    }
  },

  async create(req, res) {
    try {
      const invoice = await Invoice.create(req.body);
      res.status(201).json(invoice);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar fatura' });
    }
  },

  async update(req, res) {
    try {
      const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!invoice) return res.status(404).json({ error: 'Fatura não encontrada' });
      res.json(invoice);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar fatura' });
    }
  },

  async remove(req, res) {
    try {
      const invoice = await Invoice.findByIdAndDelete(req.params.id);
      if (!invoice) return res.status(404).json({ error: 'Fatura não encontrada' });
      res.json({ message: 'Fatura removida com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover fatura' });
    }
  }
};