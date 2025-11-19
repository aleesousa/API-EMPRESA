const express = require('express');
const router = express.Router();

const controller = require('../controllers/companyController');
const validate = require('../middlewares/validateYup');
const validateId = require('../middlewares/validateObjectId');
const { createCompanySchema } = require('../validators/companyValidator');

router.get('/', controller.list);
router.get('/:id', validateId, controller.get);
router.post('/', validate(createCompanySchema), controller.create);
router.put('/:id', validateId, validate(createCompanySchema), controller.update);
router.delete('/:id', validateId, controller.remove);

module.exports = router;