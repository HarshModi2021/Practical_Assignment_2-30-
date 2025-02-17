const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DB_URL)
.then(() => {
  console.log("Database is connected")
})
.catch((error) => {
  console.log(error)
})

module.exports = mongoose