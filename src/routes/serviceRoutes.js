const express = require('express');
const router = express.Router();

const controller = require('../controllers/serviceController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createServiceSchema } = require('../validators/serviceValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createServiceSchema), controller.create);
router.put('/:id', validateId, validate(createServiceSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;