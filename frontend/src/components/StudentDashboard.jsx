import { useSelector } from "react-redux";

import EnrolledCourseItem from "./EnrolledCourseItem";

export default function StudentDashboard() {
  const courses = useSelector((state) => state.user.courses);

  return (
    <div className="flex flex-col  gap-6 xl:px-48 lg:px-12 px-6 py-12">
      <h1 className="text-4xl uppercase">My Courses</h1>
      <hr />
      {courses.length===0 ? <h1 className="text-xl text-center font-bold">You have not enrolled in any course yet! Please enroll.</h1>:
      courses.map((course) => (
        <EnrolledCourseItem
          key={course.courseId}
          title={course.title}
          description={course.description}
          instructor={course.instructor}
          thumbnail={course.thumbnail}
          dueDate={course.dueDate}
          completed = {course.completed}
          courseId = {course.courseId}
        />
      ))}
    </div>
  );
}
