const express = require('express');
const router = express.Router();

const controller = require('../controllers/departmentController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createDepartmentSchema } = require('../validators/departmentValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createDepartmentSchema), controller.create);
router.put('/:id', validateId, validate(createDepartmentSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;