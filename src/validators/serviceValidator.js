const yup = require('yup');

const createServiceSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().nullable(),
  price: yup.number().min(0).required('Preço é obrigatório'),
  company: yup.string().required('ID da empresa é obrigatório')
});

module.exports = { createServiceSchema };