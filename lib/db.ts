import mysql from 'mysql2/promise';

export async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306
  });

  return connection;
}

// Database fetches
export async function getUserServers(userId: string){
  const connection = await getConnection();
  const result = await connection.query('SELECT * FROM guilds WHERE owner_id=?', [userId]);

  return result;
}