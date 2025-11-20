const yup = require('yup');

const createEmployeeSchema = yup.object({
  firstName: yup.string().required('Primeiro nome é obrigatório'),
  lastName: yup.string().required('Último nome é obrigatório'),
  email: yup.string().email().required('Email é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  phone: yup.string().nullable(),
  company: yup.string().required('ID da empresa é obrigatório'),
  unit: yup.string().required('ID da unidade é obrigatório'),
  department: yup.string().required('ID do departamento é obrigatório'),
  role: yup.string().nullable(),
  hiredAt: yup.date().nullable(),
  active: yup.boolean().nullable()
});

module.exports = { createEmployeeSchema };
