const express = require('express');
const router = express.Router();

const controller = require('../controllers/unitController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createUnitSchema } = require('../validators/unitValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createUnitSchema), controller.create);
router.put('/:id', validateId, validate(createUnitSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;