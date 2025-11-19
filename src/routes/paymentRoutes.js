const express = require('express');
const router = express.Router();

const controller = require('../controllers/paymentController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createPaymentSchema } = require('../validators/paymentValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createPaymentSchema), controller.create);
router.put('/:id', validateId, validate(createPaymentSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;