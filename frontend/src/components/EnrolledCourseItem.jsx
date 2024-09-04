import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnrolledCourses } from "../store";

export default function EnrolledCourseItem({ title, description, instructor, thumbnail, dueDate, completed, courseId }) {
    const [daysLeft, setDaysLeft] = useState(0);
    const [percentageDaysLeft, setPercentageDaysLeft] = useState(0);
    const dispatch = useDispatch();
    const userName = useSelector(state=>state.user.userName);

    const markAsCompleted = async ()=>{
       try {
        const url = import.meta.env.VITE_BACKEND_SERVER_HOST+`user/${userName}/${courseId}`;
        let response = await fetch (url, {method: "PATCH"});
        if(!response.ok) throw new Error("Somethig went wrong!");
        response = await response.json();
        dispatch(setEnrolledCourses(response.courses));
       } catch (error) {
        alert(error.message);
       }
        
    }
    useEffect(() => {
        const calculateDaysLeft = () => {
            const days = Math.floor((new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24));
            setDaysLeft(days);
            const percentage = ((1 / (days + 1)) * 100).toFixed(2);
            setPercentageDaysLeft(percentage);
        };

        calculateDaysLeft();
    }, [dueDate]);

    return (
        <div className="flex lg:flex-row flex-col gap-8 xl:p-12 p-4 shadow-lg border-2">
            <img className="lg:w-1/2" src={`${import.meta.env.VITE_BACKEND_SERVER_HOST}images/thumbnails/${thumbnail}`} alt="" />
            <div className="lg:w-1/2 flex flex-col gap-2 justify-between ">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-xl ">{description}</p>
                <h2 className="text-lg font-bold">Instructor: {instructor}</h2>
                <h2 className="font-bold text-lg">Due Date: <span className="text-md font-normal">{dueDate}</span></h2>
                <h2 className="font-bold text-lg">Days Left: <span className="text-md font-normal">{daysLeft}</span></h2>

                <div className="border-4 w-full rounded-full mt-6">
                    <div 
                        className="relative p-2 bg-indigo-500 rounded-full"
                        style={{ width: `${completed? 100 : percentageDaysLeft}%` }}
                    >
                        <span className="absolute right-0 bottom-full">{completed? 100: percentageDaysLeft}%</span>
                    </div>
                </div>
                
                <button className="bg-pink-500 text-white p-2" onClick={markAsCompleted}>Mark as Completed</button>
            </div>
        </div>
    );
}
