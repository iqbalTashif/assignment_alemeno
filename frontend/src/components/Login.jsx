
import { useDispatch } from "react-redux";
import { setUser } from "../store";
import { useRef } from "react";

export default function Login() {
    
    const userNameInputRef = useRef(null);
    const dispatch = useDispatch();
  
    const fetchUserDetails = async (userName) => {
      try {
        let response = await fetch(
          `${import.meta.env.VITE_BACKEND_SERVER_HOST}user/${userName}`
        );
        if (!response.ok) throw new Error("User not found!");
  
        response = await response.json();
        const user = response.user;
  
        dispatch(setUser({ userName: user.name, courses: user.courses }));
      } catch (error) {
        alert(error);
      }
    };
  
    const loginHandler = () => {
      const userName = userNameInputRef.current.value.trim();
      if (userName) {
        fetchUserDetails(userName);
      }
    };

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="flex flex-col gap-4 shadow-lg w-96 ">
        <h1 className="bg-indigo-500 text-white p-4">Please Login</h1>
        <div className="p-4 flex flex-col gap-6">
          <input
            ref={userNameInputRef}
            type="text"
            name="username"
            placeholder="User Name"
            className="border-b-2 w-full focus:outline-none focus:border-b-black"
          />
          <button
            onClick={loginHandler}
            className="bg-pink-500 py-2 px-4 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
