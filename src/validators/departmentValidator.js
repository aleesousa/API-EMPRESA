const yup = require('yup');

const createDepartmentSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  unit: yup.string().required('ID da unidade é obrigatório'),
  description: yup.string().nullable()
});

module.exports = { createDepartmentSchema };