const MenuItem = require('../models/MenuItem');

const getMenu = async (req, res, next) => {
    try {
        const menuItems = await MenuItem.find({});
        res.status(200).json(menuItems);
    } catch (error) {
        next(error);
    }
};

const getMenuItemById = async (req, res, next) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (menuItem) {
            res.status(200).json(menuItem);
        } else {
            res.status(404);
            throw new Error('Menu item not found');
        }
    } catch (error) {
        next(error);
    }
};

const getMenuByCategory = async (req, res, next) => {
    try {
        const category = req.params.category;
        const menuItems = await MenuItem.find({ category: { $regex: new RegExp(`^${category}$`, 'i') } });
        res.status(200).json(menuItems);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getMenu,
    getMenuItemById,
    getMenuByCategory,
};
