const express = require('express');
const router = express.Router();

const controller = require('../controllers/employeeController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createEmployeeSchema } = require('../validators/employeeValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createEmployeeSchema), controller.create);
router.put('/:id', validateId, validate(createEmployeeSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;