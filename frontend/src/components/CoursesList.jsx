import { useEffect } from "react";
import CourseItem from "./CourseItem";
import { useSelector, useDispatch } from "react-redux";
import { updateCoursesList, updateStatus, updateCourses } from "../store"; 
import {useSocket} from "../hooks/useSocket"

export default function CoursesList() {
  const courses = useSelector(state => state.courses.courses);
  const totalCourses = useSelector(state => state.courses.totalCourses);
  const currentPage = useSelector(state => state.courses.currentPage);
  const totalPages = useSelector(state => state.courses.totalPages);
  const isLoading = useSelector(state => state.courses.isLoading);
  const socket = useSocket(import.meta.env.VITE_BACKEND_SERVER_HOST);

  const dispatch = useDispatch();

  const fetchCourses = async (pageNumber = 1, searchTerm = '') => {
    try {
      dispatch(updateStatus({ isLoading: true }));
      const url = `${import.meta.env.VITE_BACKEND_SERVER_HOST}courses?page=${pageNumber}&search=${encodeURIComponent(searchTerm)}`;
      let response = await fetch(url);
      if (!response.ok) throw new Error("Could not fetch courses!");
      response = await response.json();
      const { courses, totalCount, page, totalPages } = response;
      dispatch(updateCoursesList({ courses, totalCourses: totalCount, currentPage: page, totalPages, isLoading: false }));
    
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const fetchNextPage = async () => {
    if (currentPage === totalPages) return;
    await fetchCourses(currentPage + 1);
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 0);
  };

  const fetchPrevPage = async () => {
    if (currentPage === 1) return;
    await fetchCourses(currentPage - 1);
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 0);
  };

  useEffect(() => {
    console.log("Current page from Redux state:", currentPage);
    if (socket) {
      const welcomeHandler = (data) => {
        console.log(`Received message: ${data}`);
      };

      const updateLikes = (courseItem) => {
        console.log("Logging course and current page ", courseItem.page, currentPage);

        const courseExists = courses.find(el=>el._id===courseItem.id);
        if(!courseExists) return;

        const newCourses = courses.map(el => {
          if (el._id === courseItem.id) {
            const likes = el.likes + 1;
            console.log(el.likes, likes);
            return { ...el, likes: likes };
          }
          return el;
        });

        console.log(newCourses);

        dispatch(updateCourses(newCourses));
      };

      const updateDislikes = (courseItem) => {
        const courseExists = courses.find(el=>el._id===courseItem.id);
        if(!courseExists) return;
        const newCourses = courses.map(el => {
          if (el._id === courseItem.id) {
            const dislikes = el.dislikes + 1;
            return { ...el, dislikes };
          }
          return el;
        });
        dispatch(updateCourses(newCourses));
      };

      socket.on('welcome', welcomeHandler);
      socket.on('like', updateLikes);
      socket.on('dislike', updateDislikes)
      return () => {
        socket.off('welcome', welcomeHandler);
        socket.off("like", updateLikes);
        socket.off("dislike", updateDislikes);
      };
    }
  }, [socket, currentPage, courses, dispatch]);

  useEffect(() => {
    if(courses.length>0) return;
    fetchCourses();
  }, []);

  return (
    <>
      <section className="w-full justify-center gap-2 flex flex-wrap xl:p-12 p-4">
        {isLoading ? <h1 className="text-4xl font-bold text-center">Loading...</h1> : courses.map((course) => (
          <CourseItem
            socket={socket}
            key={course._id}
            id={course._id}
            title={course.title}
            instructor={course.instructor}
            likes={course.likes}
            dislikes={course.dislikes}
            thumbnail={`${import.meta.env.VITE_BACKEND_SERVER_HOST}images/thumbnails/${course.thumbnail}`}
            enrolledStudents = {course.enrolledStudents}
          />
        ))}
      </section>

      <div className="flex p-2 items-center gap-12 justify-center">
        <button
          onClick={fetchPrevPage}
          className="py-2 px-4 bg-indigo-500 text-white disabled:opacity-30"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <h1 className="text-right">
          Showing {currentPage * courses.length} of {totalCourses} results.
        </h1>
        <button
          onClick={fetchNextPage}
          className="py-2 px-4 bg-indigo-500 text-white disabled:opacity-30"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
