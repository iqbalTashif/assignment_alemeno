const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Course name is required']
    },
    instructor: {
        type: String,
        required: [true, 'Instructor name is required']
    },
    description: {
        type: String,
        required: [true, 'Course description is required']
    },
    enrollmentStatus: {
        type: String,
        enum: {
            values: ["Open", "Closed", "In-Progress"],
            message: 'Enrollment status must be one of: Open, Closed, or In-Progress'
        },
        required: [true, 'Enrollment status is required']
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail URL is required']
    },
    durationInWeeks: {
        type: Number,
        required: [true, 'Duration in weeks is required']
    },
    schedule: {
        type: String,
        required: [true, 'Course schedule is required']
    },
    location: {
        type: String,
        required: [true, 'Course location is required']
    },
    prerequisites: {
        type: Array,
        required: [true, 'Prerequisites are required']
    },
    syllabus: {
        type: Array,
        required: [true, 'Syllabus is required']
    },
    enrolledStudents: Array,
    likes: Number,
    dislikes: Number
});

courseSchema.index({title: "text", instructor: "text"});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
