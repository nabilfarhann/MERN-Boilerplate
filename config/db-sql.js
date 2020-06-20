const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

module.exports.databaseOptions = {
  host: '0.0.0.0',
  database: 'db',
  user: 'user',
  password: 'password',
};