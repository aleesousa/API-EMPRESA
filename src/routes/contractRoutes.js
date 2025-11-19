const express = require('express');
const router = express.Router();

const controller = require('../controllers/contractController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createContractSchema } = require('../validators/contractValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createContractSchema), controller.create);
router.put('/:id', validateId, validate(createContractSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;