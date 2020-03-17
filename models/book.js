const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name_of_event: { type: String, required: true },
  user_id: { type: String },
  time_start: { type: [String], required: true },
  time_end: { type: String, required: true },
  date: { type: String, required: true },
  note: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
