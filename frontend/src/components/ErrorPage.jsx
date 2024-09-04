import Header from "./layout/Header";
import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <>

        <Header />
        <main className="w-full h-full p-12 flex items-center flex-col gap-6 justify-center">
        <h1 className="text-6xl font-bold">
            404 
        </h1>
        <p className="text-2xl">Could not find the page you are looking for!</p>
        <Link to={"/"} className="bg-indigo-500 p-4 text-white">Go back to Courses</Link>
        </main>
        </>
    )
}