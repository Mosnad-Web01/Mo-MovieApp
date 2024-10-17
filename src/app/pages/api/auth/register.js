import { hash } from 'bcryptjs';
import { connectToDatabase } from '../../../lib/db'; // Replace with your database connection logic

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    const client = await connectToDatabase();
    const usersCollection = client.db().collection('users');

    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      res.status(422).json({ error: 'User exists already!' });
      client.close();
      return;
    }

    const hashedPassword = await hash(password, 12);

    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User created!' });
    client.close();
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
