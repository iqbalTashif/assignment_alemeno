const path = require("node:path");
const http = require("node:http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./env.env" });

const app = express();
const server = http.createServer(app);


const coursesRouter = require("./routes/coursesRoutes.js");
const userRouter = require("./routes/userRoutes.js");

// Importing Socket.IO setup
const io = require("./socket")(server, process.env.FRONT_END_ORIGIN);


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => { console.log("Connected to the database successfully!"); })
  .catch((err) => console.log(err));


app.use("/courses", coursesRouter);
app.use("/user", userRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: "Failed", error: err.message });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
