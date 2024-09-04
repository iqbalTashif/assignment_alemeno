const socketIo = require("socket.io");
const Course = require("./models/Course.js");

module.exports = (server, frontEndOrigin) => {
  const io = socketIo(server, {
    cors: {
      origin: frontEndOrigin, 
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("A user connected to the socket.io server");
    socket.emit('welcome', 'Welcome to the Socket.IO server!');

    socket.on("like", async (courseItem) => {
      console.log(courseItem.id);
      const course = await Course.findById(courseItem.id);
      if (!course) return console.log("Invalid course id");

      course.likes += 1;
      await course.save();
      console.log("Like count updated for the course " + courseItem.title);
      io.emit("like", { id: courseItem.id, page: courseItem.page });
    });

    socket.on("dislike", async (courseItem) => {
      console.log(courseItem.id);
      const course = await Course.findById(courseItem.id);
      if (!course) return console.log("Invalid course id");

      course.dislikes += 1;
      await course.save();
      console.log("Dislike count updated for the course " + courseItem.title);
      io.emit("dislike", { id: courseItem.id, page: courseItem.page });
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected!");
    });
  });

  return io;
};
