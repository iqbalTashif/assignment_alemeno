import { createSlice, configureStore } from "@reduxjs/toolkit";

const coursesInitialState = {
  courses: [],
  currentPage: 0,
  totalCourses: 0,
  totalPages: 0,
  isLoading: true,
};

const userInitialState = {
  userName: null,
  courses: [],
};

const coursesSlice = createSlice({
  name: "courseslice",
  initialState: coursesInitialState,
  reducers: {
    updateCoursesList(state, action) {
      state.courses = action.payload.courses;
      state.currentPage = action.payload.currentPage;
      state.totalCourses = action.payload.totalCourses;
      state.totalPages = action.payload.totalPages;
      state.isLoading = action.payload.isloading;
    },
    updateCourses(state, action) {
      state.courses = action.payload;
    },
    updateStatus(state, action) {
      state.isLoading = action.payload.isloading;
    },
    addEnrolledStudent(state, action) {
      state.courses = state.courses.map((course) => {
        if (course._id === action.payload.courseId)
          return {
            ...course,
            enrolledStudents: [
              ...course.enrolledStudents,
              action.payload.userName,
            ],
          };
        return course;
      });
    },
  },
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.courses = action.payload.courses;
    },
    setEnrolledCourses(state, action) {
      state.courses = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    courses: coursesSlice.reducer,
    user: userSlice.reducer,
  },
});
export const {
  updateCoursesList,
  updateStatus,
  updateCourses,
  addEnrolledStudent,
} = coursesSlice.actions;
export const { setUser, setEnrolledCourses } = userSlice.actions;
export default store;
