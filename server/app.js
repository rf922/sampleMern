const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post("/user/login", (req, res) => {
  //try to log user in
  console.log("here: ", req.body);
  const {username, password} = req.body;
  console.log(username, password);
  res.send("User logged in");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});