const User = require("../models/User");
const Course = require("../models/Course");

exports.getUser = async (req, res, next) => {
  try {
    const userName = req.params.username;
    const user = await User.findOne({ name: userName });
    if (!user) throw new Error("User is non existant!");

    res.status(200).json({ status: "success", user });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const userName = req.params.username;
    const {courseId} = req.body;

    const user = await User.findOne({ name: userName });
    if (!user) throw new Error("User is non existant!");

    const course = await Course.findById(courseId);
    if (!course) throw new Error("Invalid course id");

    const userEnrolledAlready = course.enrolledStudents.find(el=>el===userName);
    if (userEnrolledAlready)
      throw new Error("The user has been enrolled in the course already!");

    course.enrolledStudents.push(userName);
    course.save();
   
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + course.durationInWeeks * 7);

    user.courses.push({
      courseId,
      title: course.title,
      description: course.description,
      instructor: course.instructor,
      thumbnail: course.thumbnail,
      completed: false,
      enrollmentDate: today,
      dueDate: futureDate,
    });

    user.save();
    res.status(200).json({ status: "success", user });
  } catch (error) {
    next(error);
  }
};

exports.markCourseAsCompleted = async (req, res, next)=>{
    try {
        const userName = req.params.username;
        const courseId = req.params.courseid;

        const user = await User.findOne({name: userName});
        if(!user) throw new Error("User is non existant!");
        
        const courseToupdate = user.courses.find(course=>course.courseId === courseId);
        if(!courseToupdate) throw new Error("The user is not enrolled in this course!");

        courseToupdate.completed = true;
        user.save();

        res.send(user);
    } catch (error) {
        next(error);
    }
}
