const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//setup express session
const sessionStore = new MySQLStore({}, require("./config/db"));
//mount the session store on the app server
app.use(
  session({
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.PRODUCTION,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      name: "sampleMernCookie",
    },
  }),
);

app.use("/user", require("./routers/userRouter")); //http://localhost:8080/user/login

app.get("/", (req, res) => {
  req.session.isLoggedIn = true;

  res.send("Hello World!");
});

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
