//First will connect with mongodb just to do it. Then do mongoose

//const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(error => console.log(error));
// const url = 'mongodb://localhost:27017';
// const dbName = 'test'
// let db;

// async function connectDB() {
//     try {
//         const client = await MongoClient.connect(url, { useUnifiedTopology: true });
//         //await client.connect();
//         console.log('Connected successfully to MongoDB');
//         return client.db(dbName);
//     } catch (e) {
//         console.error(`Error connecting to MongoDB: ${e}`);
//         throw e;
//     }
// }
// module.exports = {
//     getDb: async function() {
//         if (db) {
//             return db;
//         } else {
//             db = await connectDB();
//             return db;
//         }
//     }
// }