const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB, {})
  .then((res) => console.log("Database connected"))
  .catch((e) => {
    console.log(e);
  });
