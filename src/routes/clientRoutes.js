const express = require('express');
const router = express.Router();

const controller = require('../controllers/clientController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createClientSchema } = require('../validators/clientValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createClientSchema), controller.create);
router.put('/:id', validateId, validate(createClientSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;