const express = require('express');
const router = express.Router();

const controller = require('../controllers/invoiceController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createInvoiceSchema } = require('../validators/invoiceValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createInvoiceSchema), controller.create);
router.put('/:id', validateId, validate(createInvoiceSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;