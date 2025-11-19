const Unit = require('../models/Unit');

module.exports = {
  async list(req, res) {
    try {
      const units = await Unit.find().populate('company');
      res.json(units);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar unidades' });
    }
  },

  async get(req, res) {
    try {
      const unit = await Unit.findById(req.params.id).populate('company');
      if (!unit) return res.status(404).json({ error: 'Unidade não encontrada' });
      res.json(unit);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar unidade' });
    }
  },

  async create(req, res) {
    try {
      const unit = await Unit.create(req.body);
      res.status(201).json(unit);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar unidade' });
    }
  },

  async update(req, res) {
    try {
      const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!unit) return res.status(404).json({ error: 'Unidade não encontrada' });
      res.json(unit);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar unidade' });
    }
  },

  async remove(req, res) {
    try {
      const unit = await Unit.findByIdAndDelete(req.params.id);
      if (!unit) return res.status(404).json({ error: 'Unidade não encontrada' });
      res.json({ message: 'Unidade removida com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover unidade' });
    }
  }
};