// Go to the MongoDB website
// Create a free M0 cluster
// Create a user
// Get the connection String
// Install the MongoDB Compass
// Create a database
// Install a mongodb package
// Create a connection from code 
// CRUD - Create Reate Update delete

const { MongoClient } = require("mongodb");

const url = 
    'mongodb+srv://atulSagotra:NMWHKRjDO9IkaSyB@namastenodejs.lpw8x.mongodb.net/'

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    await client.connect();
    console.log('Connected Successfully to server');
    const db = client.db(dbName)

    const collection = db.collection('User');

    const data = {
        firstName: 'Priya',
        lastName: 'Singla',
        city: 'Bathinda',
        phoneNumber: '9056577463'
    }
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);
    //Read
    const findResult = await collection.find({}).toArray();
    console.log("Found documents => ", findResult)

    const countResult =  await collection.countDocuments({});
    console.log("Count of documents in the user collection => ", countResult)

    const result =  await collection.find({ firstName: "Priya"}).toArray();
    console.log("result =>", result);
    return 'done'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close)