const config = require("../database/config");
const mysql = require("mysql-promise")();

const query = async (queryString) => {
  mysql.configure(config.db);
  const [results] = await mysql.query(queryString);
  return results;
};

module.exports = {
  query,
};
