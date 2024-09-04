import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setEnrolledCourses, updateCourses } from "../store";
import { useState, useEffect } from "react";


export default function CourseItem({
  title,
  instructor,
  thumbnail,
  id,
  socket,
  likes,
  dislikes,
  enrolledStudents
}) {
  const currentPage = useSelector((state) => state.courses.currentPage);
  const courses = useSelector(state=>state.courses.courses);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  
  const [enrolled, setEnrolled] = useState();

  const likeHandler = () => {
    socket.emit("like", { title, id, page: currentPage });
  };
  const dislikeHandler = () => {
    socket.emit("dislike", { title, id, page: currentPage });
  };


  useEffect(()=>{
    setEnrolled(enrolledStudents.includes(userName));
  }, [])

  const enrollHandler = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_SERVER_HOST + "user/" + userName;
      const courseId = id;
      let response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ courseId }),
        headers: {
          'Content-Type': "application/json"
        }
      });

      if(!response.ok){
        response = await response.json();
        throw new Error(response.error);
      }

      response = await response.json();
      const returnedCourses = response.user.courses;
      dispatch(setEnrolledCourses(returnedCourses));

      const updatedCourses = courses.map((course) => {
        if (course._id === courseId)
          return {
            ...course,
            enrolledStudents: [
              ...course.enrolledStudents,
              userName,
            ],
          };
        return course;
      });

      dispatch(updateCourses(updatedCourses));
      setEnrolled(true);

    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="xl:w-1/4 lg:w-1/3 w-full shadow-lg border-2 p-6 flex gap-2 flex-col">
      
      <img src={thumbnail} className="" alt="courseImage" />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">{title}</h2>
        <h3>
          Taught by <span className="font-bold">{instructor}</span>
        </h3>
        <div className="flex gap-2 justify-end mt-auto">
          <div className="w-full flex items-center gap-2">
            <button
              className="flex items-center gap-1 text-lg hover:text-indigo-500"
              onClick={likeHandler}
            >
              <IoMdThumbsUp /> {likes}
            </button>
            <button
              onClick={dislikeHandler}
              className="flex items-center gap-1 text-lg hover:text-pink-500"
            >
              <IoMdThumbsDown /> {dislikes}
            </button>
          </div>
          <button
            className={`${enrolled ? "text-black border-2 border-black" : "bg-indigo-500  text-white "} p-2 px-4`}
            onClick={enrollHandler}
          >
            {enrolled ? "Enrolled" : "Enroll"}
          </button>
          <Link to={`/${id}`} className="bg-pink-500 text-white p-2 px-4">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
