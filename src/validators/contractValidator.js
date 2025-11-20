const yup = require('yup');

const createContractSchema = yup.object({
  title: yup.string().required('Título é obrigatório'),
  company: yup.string().required('ID da empresa é obrigatório'),
  client: yup.string().required('ID do cliente é obrigatório'),
  services: yup.array().of(yup.string()).nullable(),
  totalValue: yup.number().min(0).nullable(),
  signedAt: yup.date().nullable(),
  expiresAt: yup.date().nullable(),
  status: yup
    .string()
    .oneOf(['active', 'expired', 'terminated'])
    .nullable()
});

module.exports = { createContractSchema };