const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
    title: String,
    courseId: String,
    description: String,
    instructor: String,
    thumbnail : String,
    duration: String,
    completed: Boolean,
    enrollmentDate: String,
    dueDate: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    courses: [CoursesSchema]
});

const User = new mongoose.model("user", userSchema);

module.exports = User;