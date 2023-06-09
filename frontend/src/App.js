import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";

// pages
import StudentRecords from "./Pages/StudentRecords";
import TranscriptRequestTracker from "./Pages/TranscriptRequestTracker";
import StudentProfile from "./Pages/StudentProfile";
import LoginForm from "./Components/Loginform/Loginform";
import Sidebar from "./Components/SideBarAdminSide";
import CourseRecords from "./Pages/CourseRecords";
import SemesterRecords from "./Pages/SemesterRecords";
import Dashboard from "./Pages/Dashboard";
import TranscriptRequestSubmit from "./Pages/TranscriptRequestSubmit";
import TranscriptGenerate from "./Pages/TranscriptGenerate";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <Sidebar />
      )}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/StudentRecords" element={<StudentRecords />} />
        <Route path="/CourseRecords" element={<CourseRecords />} />
        <Route path="/SemesterRecords" element={<SemesterRecords />} />
        <Route path="/Transcripts" element={<TranscriptRequestTracker />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/request" element={<TranscriptRequestSubmit />} />
        <Route path="/generate" element={<TranscriptGenerate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
