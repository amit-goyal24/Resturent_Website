const express = require('express');
const router = express.Router();
const { getMenu, getMenuItemById, getMenuByCategory } = require('../controllers/menuController');

router.get('/', getMenu);
router.get('/:id', getMenuItemById);
router.get('/category/:category', getMenuByCategory);

module.exports = router;
