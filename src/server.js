const express = require('express');
const mongoose = require('mongoose');
//const connectDB = require('./utils/db');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const PORT = 4008;

//connectDB.getDb();

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
    });

app.use('/inventory', inventoryRoutes);

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// })