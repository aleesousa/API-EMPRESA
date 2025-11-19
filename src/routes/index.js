const express = require('express');
const router = express.Router();

router.use('/companies', require('./companyRoutes'));
router.use('/units', require('./unitRoutes'));
router.use('/departments', require('./departmentRoutes'));
router.use('/employees', require('./employeeRoutes'));
router.use('/clients', require('./clientRoutes'));
router.use('/services', require('./serviceRoutes'));
router.use('/projects', require('./projectRoutes'));
router.use('/contracts', require('./contractRoutes'));
router.use('/invoices', require('./invoiceRoutes'));
router.use('/payments', require('./paymentRoutes'));

module.exports = router;