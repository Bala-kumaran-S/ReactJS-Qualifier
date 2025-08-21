import { Routes, Route } from "react-router-dom";
import Login from "./Components/AuthComponents/Login";
import SignUp from "./Components/AuthComponents/SignUp";
import Profile from "./Pages/Profile";
import Landing from "./Pages/Landing";
import ProtectedRoute from "./Components/AuthComponents/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
