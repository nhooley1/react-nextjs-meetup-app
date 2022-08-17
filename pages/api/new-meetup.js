import { MongoClient } from 'mongodb';
import { DB_CREDENTIALS } from '../../db-credentials/db-credentials';
// api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${DB_CREDENTIALS.username}:${DB_CREDENTIALS.password}@cluster0.gcbnc5v.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup added successfully!' });
  }
}

export default handler;
