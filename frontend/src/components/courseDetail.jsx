import { useEffect, useState } from "react";
import { MdOutlineSchedule, MdExpandLess, MdExpandMore } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
const backendServerHost = import.meta.env.VITE_BACKEND_SERVER_HOST;

export default function CourseDetail() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    "_id": "",
    "title": "",
    "instructor": "",
    "description": "",
    "enrollmentStatus": "",
    "thumbnail": "",
    "durationInWeeks": 0,
    "schedule": "",
    "location": "",
    "prerequisites": [],
    "syllabus": [],
});

  const params = useParams();

  const fetchCourseDetails = async (id) =>{
    try {
    const url = `${import.meta.env.VITE_BACKEND_SERVER_HOST}courses/${id}`;
    let response = await fetch(url);
    if(!response.ok) {
      setCourse([]);
      navigate("/");
    };
    response = await response.json();
    setCourse(response.course)
    console.log(response.course)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
     fetchCourseDetails(params.courseId);
  }, [])


  return (
    <>
    {course.length !== 0 && (
    <div className="flex flex-col xl:flex-row gap-4 p-12">
      <main className="xl:w-3/4 flex flex-col gap-4">
        <CourseHeader title={course.title} description={course.description} thumbnail={course.thumbnail} instructor={course.instructor}/>
        <CourseMeta prerequisites={course.prerequisites} schedule ={course.schedule} enrollmentStatus = {course.enrollmentStatus}  location={course.location} durationInWeeks ={course.durationInWeeks} />
      </main>
      <aside className="xl:w-1/4">
        <Syllabus syllabus={course.syllabus} />
      </aside>
    </div>)
  }
  </>
  );
}


function CourseHeader({title, description, thumbnail, instructor}) {
  return (
    <section>
      <img
        src={`${backendServerHost}/images/thumbnails/${thumbnail}`}
        alt="Course Thumbnail"
        className="w-full h-auto"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl bg-indigo-500 text-white p-2 font-bold">
          {title}
        </h1>
        <h2>
          <span className="font-bold">Instructor:</span> {instructor}
        </h2>
        <p>
         {description}
        </p>
      </div>
    </section>
  );
}


function CourseMeta({prerequisites, schedule, enrollmentStatus, location, durationInWeeks }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="font-bold">Prerequisites:</p>
        <ul className="list-disc ml-12 font-normal">
          {/* {prerequisites.map(item=><li key={item}>{item}</li>)} */}
          {prerequisites.map(el=><li key={el}>{el}</li>)}
          
          
        </ul>
      </div>
 
      <ul className="flex flex-wrap gap-4">
        <MetaItem label="Status:" value={enrollmentStatus} />
        <MetaItem label="Schedule:" value={schedule} icon={<MdOutlineSchedule />} />
        <MetaItem label="Duration:" value={durationInWeeks + " Weeks"} />
        <MetaItem label="Location:" value={location} />
      </ul>
    </section>
  );
}


function MetaItem({ label, value, icon }) {
  return (
    <li className="border-2 text-indigo-500 w-fit p-2 rounded-full flex items-center gap-2">
      {icon && <span className="font-bold">{icon}</span>}
      <span className="font-bold">{label} </span>{value}
    </li>
  );
}


function Syllabus({ syllabus }) {
  return (
    <section>
      {syllabus.map(week => (
        <Week key={week.week} week={week} />
      ))}
    </section>
  );
}


function Week({ week }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => setIsExpanded(prev => !prev);
  return (
    <div className="bg-gray-100 border-2 mb-4">
      <header
        className="bg-indigo-500 p-2 text-white cursor-pointer flex items-center justify-between font-bold"
        onClick={handleToggle}
      >
        <h2>Week {week.week}</h2>
        {isExpanded ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
      </header>
      {isExpanded && (
        <ol className="flex flex-col gap-2 p-4">
          {week.topics.map(topic => (
            <Topic key={topic.name} topic={topic} />
          ))}
        </ol>
      )}
    </div>
  );
}


function Topic({ topic }) {
  return (
    <li className="flex flex-col">
      <h3 className="font-bold text-lg">{topic.name}</h3>
      <p className="ml-4">{topic.description}</p>
    </li>
  );
}
