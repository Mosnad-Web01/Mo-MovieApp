import bcrypt from 'bcryptjs';
import connectToDatabase from '../../utils/connectionDB';

export async function POST(req) {
  const { name, email, password } = await req.json();

  const db = await connectToDatabase();

  try {
    // Check if the user exists
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error registering user', error: error.message }), { status: 500 });
  }
}
