const Company = require('../models/Company');

module.exports = {
  async list(req, res) {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar empresas' });
    }
  },

  async get(req, res) {
    try {
      const company = await Company.findById(req.params.id);
      if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar empresa' });
    }
  },

  async create(req, res) {
    try {
      const company = await Company.create(req.body);
      res.status(201).json(company);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar empresa' });
    }
  },

  async update(req, res) {
    try {
      const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
      res.json(company);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar empresa' });
    }
  },

  async remove(req, res) {
    try {
      const company = await Company.findByIdAndDelete(req.params.id);
      if (!company) return res.status(404).json({ error: 'Empresa não encontrada' });
      res.json({ message: 'Empresa removida com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover empresa' });
    }
  }
};