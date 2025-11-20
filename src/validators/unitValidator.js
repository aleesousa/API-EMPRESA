const yup = require('yup');

const createUnitSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  company: yup.string().required('ID da empresa é obrigatório'),
  address: yup.string().nullable(),
  phone: yup.string().nullable()
});

module.exports = { createUnitSchema };