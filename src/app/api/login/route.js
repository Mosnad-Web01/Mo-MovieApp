import bcrypt from 'bcryptjs';
import connectToDatabase from '../../utils/connectionDB';

export async function POST(req) {
  const { email, password } = await req.json();
  const db = await connectToDatabase();

  try {
    // Fetch user from the database
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length === 0) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 400 });
    }

    const user = existingUser[0];

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 400 });
    }

    // Set up the session (you can use `next-auth` or `jsonwebtoken` for JWT-based sessions)
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error logging in', error: error.message }), { status: 500 });
  }
}
