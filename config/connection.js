require('dotenv').config();
// const { Pool } = require('pg');

// let dbConfig;

// if (process.env.NODE_ENV === "production") {
//     // On Heroku, use the DATABASE_URL environment variable
//     dbConfig = {
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false // Required for Heroku's self-signed certificate
//         }
//     };
// } else {
//     // In development, use local environment variables
//     dbConfig = {
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         port: process.env.DB_PORT,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE
//     };
// }

const client = new Pool(dbConfig);

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Required for Heroku's self-signed certificate
    }
});

module.exports = pool;

module.exports = client;