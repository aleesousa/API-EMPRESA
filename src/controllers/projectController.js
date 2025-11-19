const Project = require('../models/Project');

module.exports = {
  async list(req, res) {
    try {
      const projects = await Project.find()
        .populate('company')
        .populate('client')
        .populate('employees');

      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar projetos' });
    }
  },

  async get(req, res) {
    try {
      const project = await Project.findById(req.params.id)
        .populate('company')
        .populate('client')
        .populate('employees');

      if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });

      res.json(project);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar projeto' });
    }
  },

  async create(req, res) {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar projeto' });
    }
  },

  async update(req, res) {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });
      res.json(project);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar projeto' });
    }
  },

  async remove(req, res) {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) return res.status(404).json({ error: 'Projeto não encontrado' });
      res.json({ message: 'Projeto removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover projeto' });
    }
  }
};