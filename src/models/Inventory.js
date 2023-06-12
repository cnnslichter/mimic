const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
    },
     { collection: 'inventory'}
);

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;