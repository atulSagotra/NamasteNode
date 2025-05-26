// Go to the MongoDB website
// Create a free M0 cluster
// Create a user
// Get the connection String
// Install the MongoDB Compass
// Create a database
// Install a mongodb package
// Create a connection from code
// CRUD - Create Reate Update delete

const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://atulSagotra:MoJ2uRGGB5bQqtt5@namastenode.zwalvbm.mongodb.net/';

const client = new MongoClient(url);
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // Create a collection
  const collection = db.collection('User');

  const data = {
    firstName: 'Priya',
    lastName: 'Singla',
    city: 'Bathinda',
    phoneNumber: '7892872821',
  };

  //insert
  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);

  //Read
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  //Delete
  const deleteResult = await collection.deleteOne({ firstName: 'Priya' });
  console.log('Found documents =>', deleteResult);

  //Read
  const specificResult = await collection
    .find({ firstName: 'Priya' })
    .toArray();
  console.log('Found documents =>', specificResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
