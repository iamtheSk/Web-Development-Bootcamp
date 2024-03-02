//jshint esversion:6



// Importing MongoClient from mongodb driver
const { MongoClient } = require('mongodb');

// Connecting to a local port
const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

connect();

// ESNext syntax using async-await
async function connect() {
	try {
		await client.connect();
		const db = client.db('cars');
		console.log(
	`Successfully connected to db ${db.databaseName}`);
	}
	catch (err) {
		console.error(`we encountered ${err}`);
	}
	finally {
		client.close();
	}
}


// 

// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb://127.0.0.1:27017";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);