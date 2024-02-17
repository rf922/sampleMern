const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/user/login", (req, res) => {
  //try to log user in
  console.log("User logged out");
  res.send("User logged in");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});