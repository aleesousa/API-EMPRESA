const Employee = require('../models/Employee');

module.exports = {
  async list(req, res) {
    try {
      const employees = await Employee.find()
        .populate('company')
        .populate('unit')
        .populate('department');

      res.json(employees);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar funcionários' });
    }
  },

  async get(req, res) {
    try {
      const employee = await Employee.findById(req.params.id)
        .populate('company')
        .populate('unit')
        .populate('department');

      if (!employee) return res.status(404).json({ error: 'Funcionário não encontrado' });

      res.json(employee);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar funcionário' });
    }
  },

  async create(req, res) {
    try {
      const employee = await Employee.create(req.body);
      res.status(201).json(employee);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar funcionário' });
    }
  },

  async update(req, res) {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!employee) return res.status(404).json({ error: 'Funcionário não encontrado' });
      res.json(employee);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar funcionário' });
    }
  },

  async remove(req, res) {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (!employee) return res.status(404).json({ error: 'Funcionário não encontrado' });
      res.json({ message: 'Funcionário removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover funcionário' });
    }
  }
};