const yup = require('yup');

const createInvoiceSchema = yup.object({
  invoiceNumber: yup.string().required('Número da fatura é obrigatório'),
  contract: yup.string().required('ID do contrato é obrigatório'),
  client: yup.string().required('ID do cliente é obrigatório'),
  issueDate: yup.date().nullable(),
  dueDate: yup.date().nullable(),
  amount: yup.number().min(0).required('Valor é obrigatório'),
  status: yup
    .string()
    .oneOf(['pending', 'paid', 'overdue'])
    .nullable()
});

module.exports = { createInvoiceSchema };