// Import express, middleware, dan controller
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authmiddleware');
const {

filterFinance,
getFinanceSummary,
  getFinances,
  getCategoryStats,
  createFinance,
  updateFinance,
  deleteFinance,
  getMonthlyStats,
  getFinanceReportByPeriod
} = require('../controllers/financeController');


router.get('/', protect, getFinances);

router.get('/monthly-stats', protect, getMonthlyStats)

router.get('/router', protect, getFinanceReportByPeriod)

router.get('/filter', protect, filterFinance);

router.get('/summary', protect, getFinanceSummary);

router.get('/stats', protect, getCategoryStats)

// Route untuk membuat data finance baru
router.post('/', protect, createFinance);

// Route untuk mengupdate data finance
router.put('/:id', protect, updateFinance);

// Route untuk menghapus data finance
router.delete('/:id', protect, deleteFinance);

module.exports = router;