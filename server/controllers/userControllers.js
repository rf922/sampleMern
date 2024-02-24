const { StatusCodes } = require("http-status-codes");
const db = require("../config/db");

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
  console.info(
    "registering user: ",
    username,
    " with password: ",
    password,
    "...",
  );
  //check if user exists already
  if (await isUserExist(username)) {
    res.status(StatusCodes.BAD_REQUEST).send("User already exists");
    return;
  }
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  try {
    const results = await db.query(sql, [username, password]);
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
