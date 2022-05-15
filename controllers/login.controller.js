const db = require("../database/db");

const login = async (username, password, res) => {
  const results = await db.query(
    `SELECT * FROM USERS WHERE USERNAME = '${username}' AND PASSWORD = '${password}'`
  );
  return results;
};

module.exports = {
  login: login,
};
