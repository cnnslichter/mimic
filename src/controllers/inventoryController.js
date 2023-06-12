//const { getDb } = require('../utils/db');
const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res, next) => {
    console.log();
    console.log('hi')
    console.log();
    try {
        // const db = await getDb();
        // console.log(db);
        // const inventory = await db.collection('inventory').find().toArray();
        // res.status(200).json(inventory);
        // console.log(inventory)

        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({error: 'An error while getting inventory collection'})
        next (error);
    } 
};