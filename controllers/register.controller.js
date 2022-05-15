const db = require("../database/db");
const register = async (username, password, res) => {
  const accountExist = await db.query(
    `SELECT COUNT(*) AS NOOFUSERS FROM USERS WHERE USERNAME = '${username}'`
  );
  if (accountExist[0].NOOFUSERS == 0) {
    const result = await db.query(
      `INSERT INTO USERS(USERNAME,PASSWORD,JWTTOKEN) VALUES ('${username}','${password}',NULL)`
    );
    if (result.affectedRows)
      return {
        status: 200,
        message: "User registered the account successfully!",
      };
    else return { status: 400, message: "Error occured during registeration!" };
  } else {
    return { status: 400, message: "Already user exist! Please login" };
  }
};

module.exports = {
  register: register,
};
