const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./routes/route")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

//test

app.get("/test", (req, res) => {
  res.send("Server is still running....");
});

// get
app.use(router)

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is still running...in ${PORT}`);
});
