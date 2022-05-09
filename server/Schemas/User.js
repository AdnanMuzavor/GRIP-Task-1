const mongoose = require("mongoose");

const BankUserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  accbal: {
    type: Number,
  },
});

const Bankuser = mongoose.model("Bankuser", BankUserSchema);

module.exports = Bankuser;
