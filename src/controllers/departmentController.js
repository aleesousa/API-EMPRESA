const Department = require('../models/Department');

module.exports = {
  async list(req, res) {
    try {
      const departments = await Department.find().populate('unit');
      res.json(departments);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar departamentos' });
    }
  },

  async get(req, res) {
    try {
      const department = await Department.findById(req.params.id).populate('unit');
      if (!department) return res.status(404).json({ error: 'Departamento não encontrado' });
      res.json(department);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar departamento' });
    }
  },

  async create(req, res) {
    try {
      const department = await Department.create(req.body);
      res.status(201).json(department);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar departamento' });
    }
  },

  async update(req, res) {
    try {
      const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!department) return res.status(404).json({ error: 'Departamento não encontrado' });
      res.json(department);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar departamento' });
    }
  },

  async remove(req, res) {
    try {
      const department = await Department.findByIdAndDelete(req.params.id);
      if (!department) return res.status(404).json({ error: 'Departamento não encontrado' });
      res.json({ message: 'Departamento removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover departamento' });
    }
  }
};