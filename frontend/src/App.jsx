import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import CoursesList from "./components/CoursesList";
import CourseDetail from "./components/courseDetail";
import ErrorPage from "./components/ErrorPage";
import StudentDashboard from "./components/StudentDashboard";
import Login from "./components/Login";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user.userName);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <CoursesList /> },
        { path: "/:courseId", element: <CourseDetail /> },
        { path: "/dashboard", element: <StudentDashboard /> },
      ],
    },
  ]);

  return <>{user ? <RouterProvider router={router} /> : <Login />}</>;
}
