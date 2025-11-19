const Service = require('../models/Service');

module.exports = {
  async list(req, res) {
    try {
      const services = await Service.find().populate('company');
      res.json(services);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar serviços' });
    }
  },

  async get(req, res) {
    try {
      const service = await Service.findById(req.params.id).populate('company');
      if (!service) return res.status(404).json({ error: 'Serviço não encontrado' });
      res.json(service);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar serviço' });
    }
  },

  async create(req, res) {
    try {
      const service = await Service.create(req.body);
      res.status(201).json(service);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar serviço' });
    }
  },

  async update(req, res) {
    try {
      const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!service) return res.status(404).json({ error: 'Serviço não encontrado' });
      res.json(service);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar serviço' });
    }
  },

  async remove(req, res) {
    try {
      const service = await Service.findByIdAndDelete(req.params.id);
      if (!service) return res.status(404).json({ error: 'Serviço não encontrado' });
      res.json({ message: 'Serviço removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover serviço' });
    }
  }
};