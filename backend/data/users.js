const mongoose = require("mongoose");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config({path: "../env.env"})

const newUsers = [
    {name: "tashifIqbal"},
    {name: "jishanAli"},
    {name: "alemeno"},
    {name: "Shanaya"},
]




mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(async () => {
    try {
        
      const insertedUsers = await User.insertMany(newUsers);
      console.log("Users Added Successfully!", insertedUsers);
    } catch (err) {
      console.log("Error inserting users", err);
    } finally {
      mongoose.disconnect()
        .then(() => console.log("Disconnected from MongoDB"))
        .catch(err => console.log("Error disconnecting from MongoDB:", err));
    }
  })
  .catch(err => console.log("Error connecting to MongoDB:", err));
