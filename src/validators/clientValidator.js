const yup = require('yup');

const createClientSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  company: yup.string().required('ID da empresa é obrigatório'),
  contactName: yup.string().nullable(),
  email: yup.string().email().nullable(),
  phone: yup.string().nullable(),
  document: yup.string().nullable()
});

module.exports = { createClientSchema };