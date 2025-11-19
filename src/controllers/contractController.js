const Contract = require('../models/Contract');

module.exports = {
  async list(req, res) {
    try {
      const contracts = await Contract.find()
        .populate('company')
        .populate('client')
        .populate('services');

      res.json(contracts);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar contratos' });
    }
  },

  async get(req, res) {
    try {
      const contract = await Contract.findById(req.params.id)
        .populate('company')
        .populate('client')
        .populate('services');

      if (!contract) return res.status(404).json({ error: 'Contrato não encontrado' });

      res.json(contract);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar contrato' });
    }
  },

  async create(req, res) {
    try {
      const contract = await Contract.create(req.body);
      res.status(201).json(contract);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar contrato' });
    }
  },

  async update(req, res) {
    try {
      const contract = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!contract) return res.status(404).json({ error: 'Contrato não encontrado' });
      res.json(contract);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar contrato' });
    }
  },

  async remove(req, res) {
    try {
      const contract = await Contract.findByIdAndDelete(req.params.id);
      if (!contract) return res.status(404).json({ error: 'Contrato não encontrado' });
      res.json({ message: 'Contrato removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover contrato' });
    }
  }
};