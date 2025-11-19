const Client = require('../models/Client');

module.exports = {
  async list(req, res) {
    try {
      const clients = await Client.find().populate('company');
      res.json(clients);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar clientes' });
    }
  },

  async get(req, res) {
    try {
      const client = await Client.findById(req.params.id).populate('company');
      if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
      res.json(client);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
  },

  async create(req, res) {
    try {
      const client = await Client.create(req.body);
      res.status(201).json(client);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar cliente' });
    }
  },

  async update(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
      res.json(client);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
  },

  async remove(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);
      if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
      res.json({ message: 'Cliente removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover cliente' });
    }
  }
};