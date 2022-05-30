const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = 8000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

  
const userRoutes = require('./routes/routes')

app.use(cors())
app.use(express.json());

app.use('/', userRoutes)
  
// app.get("/", (req, res) => {
//   console.log("TEST");

//   res.send("Hello");
// });

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
