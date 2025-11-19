const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createProjectSchema } = require('../validators/projectValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createProjectSchema), controller.create);
router.put('/:id', validateId, validate(createProjectSchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;