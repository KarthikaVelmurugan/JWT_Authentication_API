const db = require("../database/db");

const logout = async (username, res) => {
  const userID = await db.query(
    `SELECT ID FROM USERS WHERE USERNAME = '${username}' AND JWTTOKEN IS NOT NULL`
  );
  if (userID.length > 0) {
    const id = userID[0].ID;

    const result = await db.query(
      `UPDATE USERS SET JWTTOKEN = NULL WHERE ID = ${id}`
    );
    if (result.affectedRows) {
      return {
        status: 200,
        message: "Logout Successfully!",
      };
    } else {
      return {
        status: 400,
        message: "Error occured during logout",
      };
    }
  } else {
    return {
      status: 400,
      message: "Invalid Token,please login again!",
    };
  }
};

module.exports = {
  logout: logout,
};
