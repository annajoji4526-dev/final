const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://<annajoji4526_db_user>:<9JxhpXPoGqKSgc7u>@final.u4qkidx.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });