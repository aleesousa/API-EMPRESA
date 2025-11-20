const yup = require('yup');

const createProjectSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  description: yup.string().nullable(),
  company: yup.string().required('ID da empresa é obrigatório'),
  client: yup.string().nullable(),
  employees: yup.array().of(yup.string()).nullable(),
  startDate: yup.date().nullable(),
  endDate: yup.date().nullable(),
  status: yup
    .string()
    .oneOf(['planned', 'active', 'completed', 'cancelled'])
    .nullable()
});

module.exports = { createProjectSchema };