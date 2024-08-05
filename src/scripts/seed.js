// scripts/seed.js
const { MongoClient } = require('mongodb');
const { customers, events } = require('../lib/placeholder-data');

const uri = "mongodb://localhost:27017"; // Remplacez par votre URI MongoDB
const dbName = "yourDatabaseName"; // Remplacez par le nom de votre base de données

async function seedDatabase() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to database");

        const db = client.db(dbName);

        // Collections
        const customersCollection = db.collection('customers');
        const eventsCollection = db.collection('events');

        // Clean existing data
        await customersCollection.deleteMany({});
        await eventsCollection.deleteMany({});

        // Insert customers
        await customersCollection.insertMany(customers);
        console.log("Inserted customers into the collection");

        // Insert events
        await eventsCollection.insertMany(events);
        console.log("Inserted events into the collection");

        console.log("Database seeding completed");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await client.close();
    }
}

seedDatabase().catch(console.error);
