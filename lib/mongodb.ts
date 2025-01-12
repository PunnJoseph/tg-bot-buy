// import { MongoClient, MongoClientOptions, Db } from 'mongodb';

// const uri = process.env.MONGODB_URI || ''; // Connection string from MongoDB Atlas or local MongoDB instance

// const options: MongoClientOptions = {
//   // You can enable these options if needed
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// };

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// async function createIndexes(db: Db) {
//   // Create a unique index on the `telegramId` field
//   await db.collection('users').createIndex({ telegramId: 1 }, { unique: true });
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable to avoid re-initializing the client
//   if (!(global as any)._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     (global as any)._mongoClientPromise = client.connect().then(async (client) => {
//       const db = client.db('cat-clicker');
//       await createIndexes(db); // Call the index creation function after connecting
//       return client;
//     });
//   }
//   clientPromise = (global as any)._mongoClientPromise;
// } else {
//   // In production mode, create a new client
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect().then(async (client) => {
//     const db = client.db('cat-clicker');
//     await createIndexes(db); // Call the index creation function after connecting
//     return client;
//   });
// }

// export default clientPromise;
