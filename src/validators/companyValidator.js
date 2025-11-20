const yup = require('yup');

const createCompanySchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  cnpj: yup.string().required('CNPJ é obrigatório'),
  address: yup.string().nullable(),
  phone: yup.string().nullable()
});

module.exports = { createCompanySchema };