const express = require('express');
//const connectDB = require('./utils/db');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();
const PORT = 4007;

//connectDB.getDb();

app.use(express.json());
app.use('/inventory', inventoryRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})