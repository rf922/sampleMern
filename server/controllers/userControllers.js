const { StatusCodes } = require("http-status-codes");
const db = require("../config/db");
const bcrypt = require("bcrypt");

const login = async (_req, res) => {
  //TODO try to log user in
  res.status(StatusCodes.OK).send("User logged in");
};

const isUserExist = async (username) => {
  const sql = "SELECT * FROM users WHERE username = ?";
  try {
    const results = await db.query(sql, [username]);
    if (results.length > 0) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;

  //check if user exists already
  if (await isUserExist(username)) {
    res.status(StatusCodes.BAD_REQUEST).send("User already exists");
    return;
  }
  let hash;
  try {
    const salt = await bcrypt.genSalt(8);
    hash = await bcrypt.hash(password, salt);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    return;
  }

  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  try {
    const results = await db.query(sql, [username, hash]);
    res.status(StatusCodes.CREATED).send({ results });
    return;
  } catch (err) {
    console.error(err);
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("");
};

module.exports = {
  login,
  register,
};
