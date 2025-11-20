const yup = require('yup');

const createPaymentSchema = yup.object({
  invoice: yup.string().required('ID da fatura é obrigatório'),
  employee: yup.string().nullable(),
  paidAt: yup.date().nullable(),
  amount: yup.number().min(0).required('Valor é obrigatório'),
  method: yup.string().nullable()
});

module.exports = { createPaymentSchema };