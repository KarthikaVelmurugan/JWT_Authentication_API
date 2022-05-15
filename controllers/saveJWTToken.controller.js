const db = require("../database/db");

const saveJWTToken = async (username, token, res) => {
  const userID = await db.query(
    `SELECT ID FROM USERS WHERE USERNAME = '${username}' AND JWTTOKEN IS NULL`
  );
  if (userID.length > 0) {
    const id = userID[0].ID;

    const result = await db.query(
      `UPDATE USERS SET JWTTOKEN = '${token}' WHERE ID = ${id}`
    );
    if (result.affectedRows) {
      res.json({
        status: 200,
        message: "Authenticated Successfully!",
        token: `${token}`,
      });
      return 1;
    } else {
      res.json({
        status: 400,
        message: "Error occured during login",
      });
      return 0;
    }
  } else {
    const authToken = await db.query(
      `SELECT JWTTOKEN FROM USERS WHERE USERNAME = '${username}'`
    );

    const jwtToken = authToken[0].JWTTOKEN;
    console.log("jwt token", jwtToken, authToken);
    res.json({
      status: 200,
      message: "Authenticated Successfully!",
      token: `${jwtToken}`,
    });
    return 0;
  }
};

module.exports = {
  saveJWTToken: saveJWTToken,
};
