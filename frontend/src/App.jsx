import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import EditProfile from "./pages/EditProfile";
import CoursePreview from "./pages/CoursePreview";
import EditCourse from "./pages/EditCourse";
import CourseDisplay from "./pages/CourseDisplay";
import CourseDescription from "./pages/CourseDescription";
import ProtectedRoute from "./pages/ProtectedRoute";
import PaymentPage from "./pages/PaymentPage";
import ClassRoom from "./pages/ClassRoom";
import AddLesson from "./pages/AddLesson";
import CourseLessons from "./pages/CourseLessons";
import EditLesson from "./pages/EditLesson";

import InstructorDashboard from "./pages/InstructorDashboard";
import LessonQuiz from "./pages/LessonQuiz";
import StudentMessages from "./pages/StudentMessages";
import Bot from "./components/Bot";
import DoCode from "./pages/DoCode";
import GoLive from "./pages/GoLive";
import Notifications from "./components/Notifications";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:name" element={<Register />} />
        <Route path="/login/:name" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard/instructor" element={<InstructorDashboard />} />
        <Route path="/course-preview/:courseId" element={<CoursePreview />} />
        <Route path="/edit-course/:courseId" element={<EditCourse />} />
        <Route path="/course-display" element={
          <CourseDisplay />
      } />
        <Route
          path="/course/:courseId"
          element={
            <ProtectedRoute>
              <CourseDescription />
            </ProtectedRoute>
          }
        />
        <Route path="/payment/:courseId" element={<PaymentPage />} />
        <Route
          path="/classroom/:courseId"
          element={
            <ProtectedRoute>
              <ClassRoom />
            </ProtectedRoute>
          }
        />
        <Route path="/add-lesson/:courseId" element={<AddLesson />} />
        <Route path="/lessons/:courseId" element={<CourseLessons />} />
        <Route
          path="/edit-lesson/:courseId/:lessonId"
          element={<EditLesson />}
        />
        <Route path="/quiz/:courseId/:lessonId" element={<LessonQuiz />} />
        <Route path="/student-messages" element={<StudentMessages />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/do-code" element={<DoCode />} />
        <Route path="/go-live" element={<GoLive />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
};

export default App;
