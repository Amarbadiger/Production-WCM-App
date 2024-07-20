const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  inputTime: {
    type: Date, // or Date if you are storing dates
  },
  inputText: {
    type: String,
    required: true,
  },
});

const dataModel = mongoose.model("Data", dataSchema);

module.exports = dataModel;
