import mysql from 'mysql2/promise';

let connection;

export default async function connectToDatabase() {
  if (!connection) {
    try {
      // Establish the connection pool
      connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mblog',
      });

      // Run a simple test query
      const [rows] = await connection.query('SELECT 1');

      // If successful, log the connection status
      console.log('Connected to the MySQL server.');

      // Log the result of the test query to ensure it's working
      console.log('Test Query Result:', rows);

    } catch (error) {
      console.error('Error connecting to the MySQL server:', error.message);
      throw error;
    }
  }

  return connection;
}
