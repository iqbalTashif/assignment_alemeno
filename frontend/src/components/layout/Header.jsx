import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import { updateStatus, updateCoursesList } from "../../store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="border-2 border-t-8 border-t-indigo-500 shadow-sm">
      <nav className="flex items-center justify-around overflow-hidden p-2 gap-2">
        <Logo />
        <SearchBar />
        <UserInfo />
      </nav>
    </header>
  );
};

const Logo = () => (
  <div className="flex items-center">
    <Link to={"/"} className="font-bold lg:text-xl text-sm">
      Assignment
    </Link>
  </div>
);

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const fetchCourses = async (searchTerm, pageNumber=1 ) => {
    try {  
      const url = `${import.meta.env.VITE_BACKEND_SERVER_HOST}courses?page=${pageNumber}&search=${searchTerm}`;
      let response = await fetch(url);
      if (!response.ok) {
        return dispatch(updateCoursesList({ courses:[], totalCourses:0, currentPage:0, totalPages:0, isLoading: false }));
      }
      
      response = await response.json();
      const { courses, totalCount, page, totalPages } = response;
      dispatch(updateCoursesList({ courses, totalCourses:totalCount, currentPage:page, totalPages, isLoading: false }));
    
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleInputChange = (e)=>{
    navigate("/")
    clearTimeout(timerRef.current);
    dispatch(updateStatus({isloading: true}));
    timerRef.current = setTimeout(()=>{
      const searchTerm = encodeURIComponent(e.target.value.trim());
      fetchCourses(searchTerm);
    }, 1000)

  }

  return(
  <div>
    <input
      type="text"
      placeholder="Course Title or Instructor..."
      className="w-4/5 lg:w-96 bg-transparent border-2 border-black rounded-full py-2 px-4 focus:outline-none focus:border-indigo-500"
      aria-label="Search"
      onChange={handleInputChange}
    />
  </div>
  )
};

const UserInfo = () => {
  const userName = useSelector(state=>state.user.userName);

  return(
  <div className="flex gap-2 items-center">
    <Link to="/dashboard" className="lg:block hidden font-bold">
      Welcome, {userName}
    </Link>

    <Link to="/dashboard" className="bg-indigo-500 px-4 py-2 text-white">Dashboard</Link>
  </div>
  )
};

export default Header;
