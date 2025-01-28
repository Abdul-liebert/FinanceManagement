// Import express, middleware, dan controller
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authmiddleware');
const {
getFinancesByDate,
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance,
} = require('../controllers/financeController');

// Route untuk mendapatkan semua data finance
router.get('/filter', protect, getFinancesByDate);
router.get('/', protect, getFinances);

// Route untuk membuat data finance baru
router.post('/', protect, createFinance);

// Route untuk mengupdate data finance
router.put('/:id', protect, updateFinance);

// Route untuk menghapus data finance
router.delete('/:id', protect, deleteFinance);

module.exports = router;